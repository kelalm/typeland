import { useEffect, useState } from "react";
import { SegmentedControl } from "@mantine/core";

export default function PlayerModeSelector(props: {
  setSelectedPlayerMode: (playerMode: string) => void;
}) {
  const [selectedPlayerMode, setSelectedPlayerModeState] = useState("solo");

  useEffect(() => {
    props.setSelectedPlayerMode(selectedPlayerMode);
  }, []);

  return (
    <SegmentedControl
      value={selectedPlayerMode.toString()}
      onChange={(value) => {
        const parsedValue = value;
        setSelectedPlayerModeState(parsedValue);
        props.setSelectedPlayerMode(parsedValue);
      }}
      data={[
        { label: "Solo", value: "solo" },
        { label: "Multiplayer", value: "multiplayer" },
      ]}
    />
  );
}
