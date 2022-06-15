const { missions } = useSelector((state) => state.missions);
const joinedMissions = missions.filter((missions) => missions.joined);

return (
  <div className="myProfileDisplays">
    <div className="missionsReservationDisplay">
      <h1>My Missions Reservations</h1>
      {!joinedMissions.length ? (
        <h3 className="NoReservedRockets">No mission joined</h3>
      ) : (
        joinedMissions.map((joinedOne) => (
          <h3 key={joinedOne.mission_id}>{joinedOne.mission_name}</h3>
        ))
      )}
    </div>
    </div>



.myProfileDisplays h3 {
    border: 0.5px solid grey;
    padding: 15px;
}

header {
    display: flex;
    height: 62px;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid grey;
    margin-bottom: 10px;
}