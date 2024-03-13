import React from "react";

function layoutChat({ children }) {
  return (
    <div>
      <div>Sub menu chat</div>
      <div>{children}</div>
    </div>
  );
}

export default layoutChat;
