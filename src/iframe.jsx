import React from 'react'
const hostname = import.meta.env.VITE_HOSTNAME || "http://localhost:3456/";

export const Iframe = ({width, height, token, video}) => {

  if(token==="" || video === false) return null;
  
  return (
    <div
    style={{
      width: width,
      height: height + 80,
      overflow: "hidden",
      border: "1px solid black",
    }}
  > 
  <iframe
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
      id="videoFrame"
      src={`${hostname}watch?token=${token}`}
      // src={`${hostname}preview?token=${token}`}
      title="Video"
      onScroll={"none"}
    ></iframe>
  </div> 
  )
}
