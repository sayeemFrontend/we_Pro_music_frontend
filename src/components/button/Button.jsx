/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import './Button.css';
const allowedValues = ['a', 'b'];
function anyOfValues(props, propName, componentName) {
  if (!allowedValues.includes(props[propName])) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. ` + `Expected one of ${allowedValues.join(', ')}.`);
  }
}

export default function Button({ children, title = '', type = 'a', className = '', onClick = () => {} }) {
  return (
    <div onClick={onClick} className={`button ${className}`}>
      <button type={type}>{children ? children : title}</button>
    </div>
  );
}

Button.propTypes = {
  type: anyOfValues,
  validation: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  className: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  fieldError: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
  brRadius: PropTypes.string,
  height: PropTypes.string,
};
