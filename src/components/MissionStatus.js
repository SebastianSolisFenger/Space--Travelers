import React from 'react';
import PropTypes from 'prop-types';

const MissionStatus = (props) => {
  const { active } = props;
  return <h2>{active ? 'Active member' : 'Not A Member'}</h2>;
};

MissionStatus.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default MissionStatus;
