import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

export default function TimeSelector() {
  const [value, setValue] = useState("react");
  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      data={[
        { label: "15 seconds", value: "15" },
        { label: "30 seconds", value: "30" },
        { label: "45 seconds", value: "45" },
        { label: "60 seconds", value: "60" },
      ]}
    />
  );
}
