import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import './AllRockets.css';
import { getRocketList } from '../redux/rockets/rockets'

const AllRockets = () => {
 const dispatch = useDispatch();
 const rockets = useSelector((state) => state.rocketsReducer);

 useEffect(() => { 
   dispatch(getRocketList());
 }, [dispatch]);

    return (
      rockets.map((rocket) => (
        <div  key={rocket.id}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          img={rocket.img}
          desc={rocket.desc}
        />
        </div>
      ))
    );
  }

export default AllRockets;
