import PropTypes from 'prop-types';

const Rocket = ({
  id, desc, name, img,
}) => (
  <div className="rocket-info flexrow" id={id}>
    <div className="rocket-img">
      <img src={img} alt="rockets"/>
    </div>
    <div className="rocket-details flexcolumn">
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
