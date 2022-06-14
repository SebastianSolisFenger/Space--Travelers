import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation, deleteReservation } from '../redux/rockets/rockets';
import './Rockets.css';

const Rocket = ({ id, desc, name, img, reserv }) => {
  const dispatch = useDispatch();

  const reserve = () => dispatch(addReservation(id));
  const cancel = () => dispatch(deleteReservation(id));

  const resBtn = (
    <button type="button" className="reserveBtn" onClick={reserve}>
      Reserve Rocket
    </button>
  );
  const cancelBtn = (
    <button type="button" className="reserveBtn" onClick={cancel}>
      Cancel Reservation
    </button>
  );
  const reserved = <p id="reserved">Reserved</p>;

  return (
    <div className="rocket-info flex-row" id={id}>
      <div className="rocket-img">
        <img src={img} className="image" alt="rockets" />
      </div>
      <div className="rocket-details flex-column">
        <h1>{name}</h1>
        <span className="res flex-row">
          {reserv ? reserved : null}
          <p>{desc}</p>
        </span>
        {reserv === false ? resBtn : cancelBtn}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserv: PropTypes.bool.isRequired,
};

export default Rocket;
