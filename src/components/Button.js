import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, width } = props;
  const buttonStyle = {
    width: `${width}%`,
    height: '100%',
    fontSize: 20
  }

  return <button style={buttonStyle} type="button">{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Button;
