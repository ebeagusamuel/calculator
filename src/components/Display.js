import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  const display = `${result.total ? result.total : 0}${result.operation}${result.next}`;

  return <div className="display">{display}</div>;
};

Display.propTypes = {
  result: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Display;
