import { Card, Text, Button, Group, List } from '@mantine/core';
import { PositionContext } from './context';
import { useContext } from 'react';

interface Rider {
  id: number;
  name: string;
  contact: number;
  latitude: number;
  longitude: number;
}

export default function DriverCard(item: Rider) {
  const { selectPosition, setSelectPosition, BASE_URL } = useContext(PositionContext);
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder style={{ maxWidth: 350, margin: '0' }}>
      <Group position="apart" mt="md" mb="xs">
        <Text>
          <b style={{ color: '#2596be' }}>Rider Name</b>: {item.name}{' '}
        </Text>
        <Text>
          <b style={{ color: '#2596be' }}>Rider Contact</b>: {item.contact}{' '}
        </Text>
      </Group>
      <List>
        <List.Item>
          <b style={{ color: '#2596be' }}>Destination</b>: {item.destination} minutes
        </List.Item>
        <List.Item>
          <b style={{ color: '#2596be' }}>Estimated Time to Reach</b>: {item.timeToReach} minutes
        </List.Item>
      </List>
      <Button variant="light" color="green" fullWidth mt="md" radius="md">
        Accept
      </Button>
      <Button variant="light" color="red" fullWidth mt="md" radius="md">
        Reject
      </Button>
    </Card>
  );
}
