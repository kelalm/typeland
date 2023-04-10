import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import LoadingBars from "./LoadingBars";
import { useState, useEffect } from "react";
import { Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import CheckNotification from "./CheckNotification";
import { nanoid } from "nanoid";

export default function InviteFriends() {
  const [inviteLink, setInviteLink] = useState(nanoid(8));
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const newLink = nanoid(8);
    setInviteLink(`https://www.typelandtesting.com/join/${newLink}`);
  }, []);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {showNotification && (
        <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <CheckNotification onClose={handleCloseNotification} />
        </div>
      )}
      <Text size="sm" color="dimmed">
        <LoadingBars />
      </Text>
      <Text size="sm" color="dimmed">
        Waiting for more players...
      </Text>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
          Multiplayer Lobby -{" "}
          {inviteLink.substring(inviteLink.lastIndexOf("/") + 1)}
        </Text>
        <Badge color="pink" variant="light">
          1 player in lobby
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">
        {inviteLink}
      </Text>
      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          handleCopyLink();
        }}
      >
        Click here to copy your invite link to your clipboard
      </Button>
      <Button variant="light" color="orange" fullWidth mt="md" radius="md">
        Click here to start now
      </Button>
    </Card>
  );
}
