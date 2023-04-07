import React, { useState } from "react";
import { Textarea } from "@mantine/core";
import Cursor from "./Cursor";

type TextBoxProps = {
  onTypingStarted: () => void;
  gameText: string;
};

const TextBox: React.FC<TextBoxProps> = ({ onTypingStarted, gameText }) => {
  const [inputValue, setInputValue] = useState("");
  const [lastMatchedIndex, setLastMatchedIndex] = useState(-1);
  const [runningIndex, setRunningIndex] = useState(-1);

  const handleTyping = (event: any) => {
    const value = event.target.value;
    const valueLength = value.length;

    debug(event);

    onTypingStarted();
    setInputValue(value);
    setRunningIndex(valueLength - 1);
  };

  const debug = (event: any) => {
    const value = event.target.value;
    const valueLength = value.length;

    console.log("Value");
    console.log(value);
    console.log(valueLength);
  };

  const words = gameText.split(" ");
  let charIndex = 0;

  return (
    <>
      <div>
        <Cursor />
        <Textarea value={inputValue} onChange={handleTyping} />
        {words.map((word, wordIndex) => (
          <div key={wordIndex}>
            {word.split("").map((character) => (
              <span
                key={charIndex++}
                style={{
                  display: "inline-block",
                  color:
                    runningIndex == charIndex &&
                    inputValue[runningIndex] == character
                      ? "green"
                      : "red",
                }}
              >
                {character}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default TextBox;
