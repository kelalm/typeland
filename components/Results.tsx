import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

import GameOverButtons from "./GameOverButtons";

export default function Results() {
  const [value, setValue] = useState("react");
  return (
    <>
      <h1>Results</h1>
      <GameOverButtons />
    </>
  );
}
