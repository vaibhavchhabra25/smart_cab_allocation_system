import React from 'react';
import { Container, Flex } from '@mantine/core';
import RiderNavbar from '../components/RiderNavbar';
import { MapComponent } from '../components/MapComponent';
import PositionProvider from '../components/context';

export default function RiderPage() {
  return (
    <>
      <PositionProvider>
        <RiderNavbar>
          <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
            <Flex justify="flex-start" align="flex-start" direction="row">
              <Container>
                <MapComponent width="100vw" height="100vh" />
              </Container>
            </Flex>
          </div>
        </RiderNavbar>
      </PositionProvider>
    </>
  );
}
