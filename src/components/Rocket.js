import PropTypes from 'prop-types';
import './Rockets.css';

const Rocket = ({
  id, desc, name, img,
}) => (
  <div className="rocket-info" id={id}>
    <div className="rocket-img">
      <img src={img} className="image" alt="rockets"/>
    </div>
    <div className="rocket-details">
<h1>{name}</h1>
<p>{desc}</p>
<button type="button" className="reservebtn">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
