import { Button } from "@mantine/core";

type ActionButtonProps = {
  onClick: () => void;
  label: string;
};

export default function ActionButton({ onClick, label }: ActionButtonProps) {
  return (
    <Button color="gray" onClick={onClick}>
      {label}
    </Button>
  );
}
