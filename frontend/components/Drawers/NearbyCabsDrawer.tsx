import DriverCard from '../DriverCard';

function NearbyCabsDrawer({}) {
  return (
    <div>
      <>
        <DriverCard
          name={'Dinesh Reddy'}
          contact={9986012301}
          longitude={'77.123'}
          latitude={'12.123'}
          timeToArrive={'5'}
          capacity={'2/3'}
          id={4}
          key={4}
        />
        <br />
      </>
      <>
        <DriverCard
          name={'Ayush Jha'}
          contact={9981012301}
          longitude={'77.123'}
          latitude={'11.123'}
          timeToArrive={'10'}
          capacity={'1/3'}
          id={18}
          key={18}
        />
        <br />
      </>
    </div>
  );
}

export default NearbyCabsDrawer;
