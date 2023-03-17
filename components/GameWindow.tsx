import React, { useState } from "react";
import TextBox from "./TextBox";
import Timer from "./Timer";

const GameWindow: React.FC = () => {
  const [typingStarted, setTypingStarted] = useState(false);

  const handleTypingStarted = () => {
    setTypingStarted(true);
  };

  return (
    <div>
      <TextBox onTypingStarted={handleTypingStarted} />
      {typingStarted && <Timer />}
    </div>
  );
};

export default GameWindow;
