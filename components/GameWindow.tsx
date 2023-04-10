import React, { useEffect, useState } from "react";
import TextBox from "./TextBox";
import Timer from "./Timer";
import WPMBox from "./WPMBox";
import TimeSelector from "./TimeSelector";
import PlayerModeSelector from "./PlayerModeSelector";
import Results from "./Results";
import InviteFriends from "./InviteFriends";
import ActionButton from "./ActionButton";

const GameWindow: React.FC = () => {
  console.log("GameWindow rendered");
  const [typingStarted, setTypingStarted] = useState(false);
  const [gameText, setGameText] = useState("");
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const [selectedPlayerMode, setSelectedPlayerMode] = useState<string>("solo");
  const [gameOver, setGameOver] = useState(false);
  const [charactersTyped, setCharactersTyped] = useState(0);
  const [textBoxInputValue, setTextBoxInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://baconipsum.com/api/?paras=1&type=all-meat")
      .then((response) => response.json())
      .then((data) => {
        setGameText(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTypingStarted = () => {
    setTypingStarted(true);
  };

  const resetGame = () => {
    console.log("Resetting game...");
    setTypingStarted(false);
    setSelectedPlayerMode("solo");
    setGameOver(false);
    setCharactersTyped(0);
    setGameText("");
    setTextBoxInputValue(""); // clear TextBox input value
    fetchData(); // fetch new data on retry
  };

  return (
    <div>
      {!typingStarted && (
        <PlayerModeSelector setSelectedPlayerMode={setSelectedPlayerMode} />
      )}

      <br />
      <br />

      {!typingStarted && selectedPlayerMode == "multiplayer" && (
        <InviteFriends />
      )}

      <br />
      <br />

      {!typingStarted && <TimeSelector setSelectedTime={setSelectedTime} />}

      {typingStarted && !gameOver && (
        <Timer selectedTime={selectedTime} setGameOver={setGameOver} />
      )}
      {!gameOver && (
        <TextBox
          onTypingStarted={handleTypingStarted}
          gameText={gameText}
          textBoxValue={textBoxInputValue}
          setTextBoxValue={setTextBoxInputValue}
        />
      )}

      {typingStarted && !gameOver && <WPMBox />}
      {<ActionButton onClick={resetGame} label="Retry" />}
      {gameOver && <Results />}
    </div>
  );
};

export default GameWindow;
