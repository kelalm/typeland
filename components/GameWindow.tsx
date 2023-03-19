import React, { useState } from "react";
import TextBox from "./TextBox";
import Timer from "./Timer";
import WPMBox from "./WPMBox";
import TimeSelector from "./TimeSelector";

const GameWindow: React.FC = () => {
  const [typingStarted, setTypingStarted] = useState(false);

  const handleTypingStarted = () => {
    setTypingStarted(true);
  };

  return (
    <div>
      <TextBox onTypingStarted={handleTypingStarted} />
      {!typingStarted && <TimeSelector />}
      {typingStarted && <Timer />}
      {typingStarted && <WPMBox />}
    </div>
  );
};

export default GameWindow;
