import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

import LoadingBars from "./LoadingBars";

export default function InviteFriends() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text size="sm" color="dimmed">
        <LoadingBars />
      </Text>
      <Text size="sm" color="dimmed">
        Waiing for more players...
      </Text>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Multiplayer Lobby - fdskjfl</Text>
        <Badge color="pink" variant="light">
          1 player in lobby
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">
        https://www.typelandtesting.com/join/fdskjfl
      </Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Click here to copy your invite link to your clipboard
      </Button>
      <Button variant="light" color="orange" fullWidth mt="md" radius="md">
        Click here to start now
      </Button>
    </Card>
  );
}
