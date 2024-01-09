import RiderCard from '../RiderCard';

function NearbyCabsDrawer({}) {
  return (
    <div>
      <>
        <RiderCard
          name={'Vaibhav Ramola'}
          contact={9986012301}
          timeToReach={'10'}
          destination={'Google RMZ Ecoworld'}
          id={4}
          key={4}
        />
        <br />
      </>
      <>
        <RiderCard
          name={'Rohan Atkurkar'}
          contact={9981012301}
          timeToReach={'5'}
          destination={'Microsoft Carina Office'}
          id={18}
          key={18}
        />
        <br />
      </>
    </div>
  );
}

export default NearbyCabsDrawer;
