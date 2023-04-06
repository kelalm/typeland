import { useEffect, useState } from "react";
import { SegmentedControl } from "@mantine/core";

export default function TimeSelector(props: {
  setSelectedTime: (time: number) => void;
}) {
  const [selectedTime, setSelectedTimeState] = useState(1);

  useEffect(() => {
    props.setSelectedTime(selectedTime);
  }, []);

  return (
    <SegmentedControl
      value={selectedTime.toString()}
      onChange={(value) => {
        const parsedValue = parseInt(value);
        setSelectedTimeState(parsedValue);
        props.setSelectedTime(parsedValue);
      }}
      data={[
        { label: "1 seconds", value: "1" },
        { label: "15 seconds", value: "15" },
        { label: "30 seconds", value: "30" },
        { label: "45 seconds", value: "45" },
        { label: "60 seconds", value: "60" },
      ]}
    />
  );
}
