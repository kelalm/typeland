import React from "react";

type TextBoxProps = {
  onTypingStarted: () => void;
};

const TextBox: React.FC<TextBoxProps> = ({ onTypingStarted }) => {
  const handleTyping = () => {
    onTypingStarted();
  };

  return <input type="text" onChange={handleTyping} />;
};

export default TextBox;
