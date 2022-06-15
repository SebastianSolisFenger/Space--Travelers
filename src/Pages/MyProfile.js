import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserv);

  return (
    <div className="myProfileDisplays">
      <div>
        <h1>My Rocket Reservations</h1>
        {!reservedRockets.length ? (
          <h4 className="NoReservedRockets">No Reserved Rockets</h4>
        ) : (
          reservedRockets.map((rocket) => (
            <h3 key={rocket.rocket_id}>{rocket.name}</h3>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProfile;
