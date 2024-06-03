import React from "react";
import "./Welcome.css";

const letters = [
  { id: "L", letter: "W" },
  { id: "I", letter: "E" },
  { id: "G", letter: "L" },
  { id: "H", letter: "C" },
  { id: "T", letter: "O" },
  { id: "N", letter: "M" },
  { id: "E", letter: "E" },
];

const Welcome = () => {
  return (
    <div className="welcomecontainer">
      <div className="overlay">
        <div className="text">
          {letters.map(({ id, letter }) => (
            <div key={id} className="wrapper">
              <div id={id} className="letter">
                {letter}
              </div>
              <div className="shadow">{letter}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
