import { Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function CheckNotification() {
  return (
    <>
      <Notification
        icon={<IconCheck size="1.2rem" />}
        color="dark"
        radius="lg"
        title="Link copied to clipboard successfully"
      ></Notification>
    </>
  );
}
