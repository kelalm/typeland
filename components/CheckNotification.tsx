import { Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function CheckNotification({
  onClose,
}: {
  onClose: () => void;
}) {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNotification(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {showNotification && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 9999,
          }}
        >
          <Notification
            icon={<IconCheck size="1.2rem" />}
            color="dark"
            radius="lg"
            title="Link copied to clipboard successfully"
          ></Notification>
        </div>
      )}
    </>
  );
}
