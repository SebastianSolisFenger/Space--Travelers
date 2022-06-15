import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import './AllRockets.css';

const AllRockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return rockets.map((rocket) => (
    <div key={rocket.id}>
      <Rocket
        id={rocket.id}
        name={rocket.name}
        img={rocket.img}
        desc={rocket.desc}
        reserv={rocket.reserv}
      />
    </div>
  ));
};

export default AllRockets;
