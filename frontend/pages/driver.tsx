import React, { useContext } from 'react';
import { MapComponent } from '../components/MapComponent';
import { Container, Flex, Drawer } from '@mantine/core';
import DriverNavbar from '../components/DriverNavbar';
import PositionProvider from '../components/context';
import { RiderContext } from '../components/context/RiderContext';

function Admin() {
  const { rider, setRider, BASE_URL } = useContext(RiderContext);

  return (
    <PositionProvider>
      <DriverNavbar>
        <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
          <Flex justify="flex-start" align="flex-start" direction="row">
            <Container>
              <MapComponent height={'100vh'} width={'100vw'} />
            </Container>
          </Flex>
        </div>
      </DriverNavbar>
    </PositionProvider>
  );
}

export default Admin;
