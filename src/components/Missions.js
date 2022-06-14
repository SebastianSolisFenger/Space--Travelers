/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionStatus from './MissionStatus';
import {
  getMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';
import './Missions.css';

const Missions = () => {
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  const joinAMission = (id) => {
    dispatch(joinMission(id));
  };

  const leaveAMission = (id) => {
    dispatch(leaveMission(id));
  };

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
                  <MissionStatus active={mission.joined} />
                </td>
                <td>
                  {mission.joined ? (
                    <button
                      type="button"
                      className="leavemission-btn"
                      onClick={() => leaveAMission(mission.mission_id)}
                    >
                      Leave Mission
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="joinmission-btn"
                      onClick={() => joinAMission(mission.mission_id)}
                    >
                      Join a Mission
                    </button>
                  )}
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

export default Missions;
