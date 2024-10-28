import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState("white");
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://reqres.in/api/unknown")
        .then((response) => response.json())
        .then((data) => {
          setBgColor(
            data.data[Math.floor(Math.random() * data.data.length)].color
          );
        });
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "20px",
        color: bgColor === "white" ? "black" : "white",
        textAlign: "center",
        margin: "30px",
      }}
    >
      <h1>Rendering First Application</h1>
    </div>
  );
};

export default App;
