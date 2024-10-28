import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Rendering Second Application</h2>
      <h1>{date.toLocaleTimeString()}</h1>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};

export default App;
