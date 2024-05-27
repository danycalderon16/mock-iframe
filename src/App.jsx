import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Form } from "./form";
import { Iframe } from "./iframe";
const hostname = import.meta.env.VITE_HOSTNAME || "http://localhost:3456/";

function App() {
  const [token, setToken] = useState("");
  const [video, setVideo] = useState(false);
  const ventanaSecundaria = useRef(null);

  const handleClickWatch = (pathname = "/") => {
    const screenWidth = Math.round(window.screen.width * 0.9);
    const screenHeight = Math.round(window.screen.height * 0.9);
    const windowFeatures =
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no";
    const windowOptions = `width=${screenWidth}, height=${screenHeight}, top=${
      (window.screen.height - screenHeight) / 2
    }, left=${(window.screen.width - screenWidth) / 2}`;

    ventanaSecundaria.current = window.open(
      hostname + pathname + "?token=" + token,
      "_blank",
      `${windowFeatures}, ${windowOptions}`
    );
  };
  const handleClickIndex = (pathname = "/") => {
    const screenWidth = Math.round(window.screen.width * 0.9);
    const screenHeight = Math.round(window.screen.height * 0.9);
    const windowFeatures =
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no";
    const windowOptions = `width=${screenWidth}, height=${screenHeight}, top=${
      (window.screen.height - screenHeight) / 2
    }, left=${(window.screen.width - screenWidth) / 2}`;

    ventanaSecundaria.current = window.open(
      hostname + pathname,
      "_blank",
      `${windowFeatures}, ${windowOptions}`
    );
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 70);
      setHeight((window.innerWidth - 70) * (9 / 16));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "cerrarVentana") {
        console.log("Se cerro la ventana");
        if (ventanaSecundaria.current) {
          ventanaSecundaria.current.close();
          ventanaSecundaria.current = null;
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="flex flex-col justify-center w-full items-center mb-10">
      <div className="h-auto w-full overflow-hidden">
        <p className="w-full break-words">
          Token de ejemplo:
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoiMTk5OSIsImlkX2FjdGl2aWRhZCI6ImZjNTU1NThmLTgyZDctNGVkYS1hNmZmLWUwOTFiNWJkZGRlMCJ9.Dydyv8qQbHywFCwMXKyuRIYT6_ZwlcZhQ5NwkRfw6Es
        </p>
      </div>
      <Form token={token} setToken={setToken} />
      <div className="flex justify-center gap-3">
        <button
          className="bg-gray-950 text-white"
          onClick={() => handleClickIndex("")}
        >
          Index
        </button>
        <button
          className="bg-gray-950 text-white"
          onClick={() => handleClickWatch("create")}
        >
          crear video
        </button>
        <button
          className="bg-gray-950 text-white"
          onClick={() => handleClickWatch("activities")}
        >
          listar actividades
        </button>
        <button
          className="bg-gray-950 text-white"
          onClick={() => setVideo((prev) => !prev)}
        >
          {video ? "Cerrar video" : "Ver video"}
        </button>
        <button onClick={() => window.close()}>Cerrar</button>
      </div>
      <Iframe width={width} height={height} token={token} video={video} />
    </div>
  );
}
export default App;
