import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserv);
  const { missions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((missions) => missions.joined);

  return (
    <div className="myProfileDisplays">
      <div className="reservationDisplay">
        <h1>My Rockets</h1>
        {!reservedRockets.length ? (
          <h4 className="NoReservedRockets">No Reserved Rockets</h4>
        ) : (
          reservedRockets.map((rocket) => (
            <h3 key={rocket.rocket_id}>{rocket.name}</h3>
          ))
        )}
      </div>
      <div className="missionsDisplay">
        <h1>My Missions </h1>
        {!joinedMissions.length ? (
          <h3 className="NoReservedRockets">No mission joined</h3>
        ) : (
          joinedMissions.map((joinedOne) => (
            <h3 key={joinedOne.mission_id}>{joinedOne.mission_name}</h3>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProfile;
