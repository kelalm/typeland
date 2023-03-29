import React, { useEffect, useState } from "react";
import TextBox from "./TextBox";
import Timer from "./Timer";
import WPMBox from "./WPMBox";
import TimeSelector from "./TimeSelector";
import Results from "./Results";

const GameWindow: React.FC = () => {
  const [typingStarted, setTypingStarted] = useState(false);
  const [gameText, setGameText] = useState("");

  useEffect(() => {
    // Fetch text for TextBox
    // Using sample text for now
    fetch("https://baconipsum.com/api/?paras=1&type=all-meat")
      .then((response) => response.json())
      .then((data) => {
        setGameText(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTypingStarted = () => {
    setTypingStarted(true);
  };

  return (
    <div>
      {!typingStarted && <TimeSelector />}
      <TextBox onTypingStarted={handleTypingStarted} gameText={gameText} />
      {typingStarted && <Timer />}
      {typingStarted && <WPMBox />}
    </div>
  );
};

export default GameWindow;
