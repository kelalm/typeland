import React from "react";
import { Textarea } from "@mantine/core";

type TextBoxProps = {
  onTypingStarted: () => void;
  gameText: string;
};

const TextBox: React.FC<TextBoxProps> = ({ onTypingStarted, gameText }) => {
  const handleTyping = () => {
    onTypingStarted();
  };

  return (
    <>
      <div></div>
    </>
  );
};

export default TextBox;
