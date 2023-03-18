import React, { useEffect, useState } from "react";

const WPMBox: React.FC = () => {
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    setWpm((prevWpm) => prevWpm + 1);
  }, []);

  return <h1>{wpm}</h1>;
};

export default WPMBox;
