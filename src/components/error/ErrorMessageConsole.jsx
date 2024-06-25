import React, { useState, useEffect } from "react";
import Lottie from "react-lottie"; // Import the Lottie component
import "./style.css"; // CSS file for styling (adjust styles as needed)
import animationData from "./error.json"; // Import the JSON animation file

const ErrorMessageConsole = ({ message, color }) => {
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(1);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 1000);
      } else if (letterCount === message.length + 1 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(-1);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 1000);
      } else if (!waiting) {
        setLetterCount(letterCount + x);
      }
    }, 120);

    const interval2 = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [letterCount, waiting, message, x]);

  const textStyle = {
    color: color || "tomato",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="console-container">
      <Lottie options={defaultOptions} height={400} width={400} />
      <span id="text">{message.substring(0, letterCount)}</span>
      <div className={`console-underscore ${visible ? "" : "hidden"}`}>
        &#95;
      </div>
    </div>
  );
};

export default ErrorMessageConsole;
