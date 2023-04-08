import React, { useEffect, useState } from "react";
import TextBox from "./TextBox";
import Timer from "./Timer";
import WPMBox from "./WPMBox";
import TimeSelector from "./TimeSelector";
import Results from "./Results";
import InviteFriends from "./InviteFriends";

const GameWindow: React.FC = () => {
  const [typingStarted, setTypingStarted] = useState(false);
  const [gameText, setGameText] = useState("");
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const [gameOver, setGameOver] = useState(false);

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
      {!typingStarted && <InviteFriends />}
      {!typingStarted && <TimeSelector setSelectedTime={setSelectedTime} />}
      {typingStarted && !gameOver && (
        <Timer selectedTime={selectedTime} setGameOver={setGameOver} />
      )}
      {!gameOver && (
        <TextBox onTypingStarted={handleTypingStarted} gameText={gameText} />
      )}

      {typingStarted && !gameOver && <WPMBox />}
      {gameOver && <Results />}
    </div>
  );
};

export default GameWindow;
