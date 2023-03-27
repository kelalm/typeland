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
      <Textarea
        placeholder={gameText}
        // label="Your comment"
        radius="lg"
        size="xl"
        withAsterisk
        onChange={handleTyping}
      />
    </>
  );
};

export default TextBox;
