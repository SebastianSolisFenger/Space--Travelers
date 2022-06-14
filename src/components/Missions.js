/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MissionStatus from './MissionStatus';
import './Missions.css';

import { getMissions } from '../redux/missions/missions';

const Missions = (props) => {
  const { id } = props;
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const joinEventHandler = () => {
    dispatch(getMissions(id));
  }

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  let content = null;

  if (loading) {
    content = <h2>Loading..</h2>;
  } else {
    content = (
      <div className="missions">
        <table className="missions-table">
          <thead>
            <tr>
              <th>Missions</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
                  <MissionStatus active />
                </td>
                <td>
                  {/* <button type="button">Join a Mission</button> */}
                  <button type="button" onClick={joinEventHandler}>Join a Mission</button>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    );
  }

  return <div className="missions">{content}</div>;
};

Missions.propTypes = {
  id: PropTypes.func.isRequired,
  // name: PropTypes.func.isRequired,
  // description: PropTypes.func.isRequired,
};

export default Missions;
