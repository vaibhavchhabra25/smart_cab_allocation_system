import { useContext, useEffect, useState } from 'react';
import {
  Navbar,
  Drawer,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Flex,
  Divider,
} from '@mantine/core';
import { TablerIcon, IconLogout, IconCar, IconUser, IconLiveView } from '@tabler/icons';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import NearbyCabsDrawer from './Drawers/NearbyCabsDrawer';
import styles from '../css/Box.module.css';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconLiveView, label: 'Nearby Cabs', title: 'Nearby Cabs' },
  { icon: IconCar, label: 'Previous Trips', title: 'Previous Trips' },
  { icon: IconUser, label: 'Profile', title: 'Profile' },
];

export default function RiderNavbar({ children }) {
  const [active, setActive] = useState(-1);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index === active ? -1 : index)}
    />
  ));

  return (
    <>
      <Flex
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap-reverse"
        gap={{ base: 'sm' }}
      >
        <>
          <Drawer
            opened={active >= 0}
            onClose={() => setActive(-1)}
            title={
              <div style={{ marginLeft: 40 }}>
                <strong style={{ color: '#2596be' }}>{mockdata[active]?.title}</strong>
                <Divider size="md" />
              </div>
            }
            padding="xl"
            size="xl"
            style={{ translate: '5%' }}
            overlayOpacity={0}
            className={styles.insidediv}
          >
            {/* <div style={{ paddingLeft: 40 }}>
              {active === 0 && (
                <>
                  Hello, {rider.name}, {rider.contact}, {rider.id}
                </>
              )}
            </div> */}
            <div style={{ paddingLeft: 40 }}>
              {active === 0 && <NearbyCabsDrawer />}
              {active === 1 && 'Previous Rides'}
              {active === 2 && 'Profile'}
            </div>
          </Drawer>
        </>
        <Navbar height={'100vh'} width={{ base: '75px' }} p={'xs'}>
          <Navbar.Section grow mt={50}>
            <Stack justify="center" spacing={0}>
              {links}
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack justify="center" spacing={0}>
              <ColorSchemeToggle />
              <br />
              <NavbarLink icon={IconLogout} label="Logout" />
            </Stack>
          </Navbar.Section>
        </Navbar>
        <>{children}</>
      </Flex>
    </>
  );
}
