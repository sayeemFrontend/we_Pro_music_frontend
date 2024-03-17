import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
  const { placeholder, className, type = 'text', name, fieldError, ...restProps } = props;

  return (
    <>
      <div className={`input-wrapper ${className}`}>
        <input name={name} placeholder={placeholder} type={type} {...restProps} />
      </div>
      {fieldError && <p className='text-[#dc5c5c] text-sm'>{fieldError}</p>}
    </>
  );
};
export default Input;

Input.propTypes = {
  validation: PropTypes.func,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  fieldError: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
  brRadius: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
};
