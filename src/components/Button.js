import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, wide, color } = props;
  const buttonStyle = {
    width: `${wide === true ? 50 : 25}%`,
    height: '100%',
    fontSize: 20,
    backgroundColor: `${color}`,
  };

  return (
    <button style={buttonStyle} type="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};
export default Button;
