import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  let display = `${result.total}${result.operation}${result.next}`

  return <div className="display">{display}</div>;
};

Display.propTypes = {
  result: PropTypes.object.isRequired,
};

// Display.defaultProps = {
//   result: '0',
// };

export default Display;
