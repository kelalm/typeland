import React, { useState } from "react";
import { Textarea } from "@mantine/core";
import Cursor from "./Cursor";

type TextBoxProps = {
  onTypingStarted: () => void;
  gameText: string;
  textBoxValue: string;
  setTextBoxValue: React.Dispatch<React.SetStateAction<string>>;
};

const TextBox: React.FC<TextBoxProps> = ({
  onTypingStarted,
  gameText,
  textBoxValue,
  setTextBoxValue,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [lastMatchedIndex, setLastMatchedIndex] = useState(-1);
  const [runningIndex, setRunningIndex] = useState(-1);

  const handleTyping = (event: any) => {
    const value = event.target.value;
    const valueLength = value.length;

    const lastEnteredLetter = value[valueLength - 1];

    debug(event);

    onTypingStarted();
    setInputValue(value);
    setRunningIndex(valueLength - 1);
  };

  const debug = (event: any) => {
    const value = event.target.value;
    const valueLength = value.length;
    const lastEnteredLetter = value[valueLength - 1];

    console.log("Value");
    console.log(value);
    console.log(valueLength);
    console.log(lastEnteredLetter);
  };

  const words = gameText.toLowerCase().split(" ");
  const wordsWithSpace = words.flatMap((word, index) => {
    return index === words.length - 1 ? [word] : [word, " "];
  });

  let charIndex = 0;

  return (
    <>
      <div>
        <Cursor />
        <Textarea value={inputValue} onChange={handleTyping} />
        {wordsWithSpace.map((word, wordIndex) => (
          <div
            key={wordIndex}
            style={{
              display: "inline",
              marginRight: ".1rem",
              fontSize: "1.3rem",
            }}
          >
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
