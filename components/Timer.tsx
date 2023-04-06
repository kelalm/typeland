import React, { useEffect, useState } from "react";

type Props = {
  selectedTime: number;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

const Timer: React.FC<Props> = ({ selectedTime, setGameOver }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (time >= selectedTime) {
      // do something when the selected time is reached
      console.log("Time complete.");
      // End game
      setGameOver(true);
    }
  }, [time, selectedTime]);

  return <h1>{time}</h1>;
};

export default Timer;
