import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Programmer", "Front end Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return text;
};

export default MyComponent;
