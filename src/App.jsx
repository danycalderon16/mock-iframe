
import { useEffect, useState } from "react";
import "./App.css";
const hostname = import.meta.env.VITE_HOSTNAME || "http://localhost:3456/";
const token = import.meta.env.VITE_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hY3Rpdml0eSI6IjJlYTkyMzc1NWMiLCJpZF9wcm9qZWN0Ijo0LCJpZF9jcmVhdG9yIjoiMyJ9.vjcBL-2tfsxSA9cYU3ftkNKbH_XR9XoXH1mbCKkpPu0";
// const url = "https://dev.d31tbalsqujwg0.amplifyapp.com/";

function App() {

  console.log(`${hostname}watch?token=${token}`);

  const handleClickWatch = (pathname = "/") => {
    const windowFeatures =
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no";
    const screenWidth = 600;
    const screenHeight = 400;
    const windowOptions = `width=${screenWidth}, height=${screenHeight}, top=0, left=0`;

    const newWindow = window.open(
      hostname + pathname + "?token=" + token,
      "_blank",
      `${windowFeatures}, ${windowOptions}`
    );

    // // Genera la etiqueta embed con la URL del contenido multimedia
    // const embedCode = `<embed src="${url}" width="${screenWidth}" height="${screenHeight}" />`;

    // // Escribe la etiqueta embed en la ventana emergente
    // newWindow.document.write(embedCode);
  };
  const handleClickCreate = () => {};

  const [isOpen, setIsOpen] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth-70);
      setHeight(((window.innerWidth-70)*(9/16)));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const [isLarge, setIsLarge] = useState(false);

  const toggleSize = () => {
    setIsLarge(!isLarge);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={{ margin: "1rem", background: "#111", color: "#fff" }}
        onClick={() => handleClickWatch("/create")}
      >
        crear video
      </button>
      <button
        style={{ margin: "1rem", background: "#111", color: "#fff" }}
        onClick={() => handleClickWatch("/activities")}
      >
        listar actividades
      </button>
      <button
        style={{ margin: "1rem", background: "#111", color: "#fff" }}
        onClick={() => handleClickWatch("/watch")}
      >
        ver video
      </button>
      {/*   <button
        style={{ margin: "1rem", background: "#111", color: "#fff" }}
        onClick={openPopup}
      >
        Crear
      </button>
      <button onClick={toggleSize}>
        {isLarge ? "Reducir tamaño" : "Ampliar tamaño"}
      </button> */}
      <div style={{ width:(width), height:(height+80), overflow:"hidden",}}>
        
        <iframe
          style={{ width:"100%", height:"100%", backgroundColor:"green", border:"none"}}
          id="videoFrame"
          src={`${hostname}watch?token=${token}`}
          title="Video"
          onScroll={"none"}
          ></iframe>
          </div>

        <div style={{marginTop:120}}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellendus, repellat iusto quis perspiciatis cumque quisquam consectetur, sint voluptas magnam officia accusamus earum inventore ut in autem reprehenderit natus laudantium7.</p></div>
    </div>
  );
}

export default App;
