import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <h1>{time}</h1>;
};

export default Timer;
