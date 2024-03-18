import PropTypes from 'prop-types';
import './Input.css';
import SearchIcon from './search.svg?react';
import React, { useRef } from 'react';

const Input = (props) => {
  const { placeholder, icon = false, onSearch = () => null, className, type = 'text', name, fieldError, ...restProps } = props;
  const inputRef = useRef(null);

  const handleSearch = React.useCallback(() => {
    const { name = '', value = '' } = inputRef.current;
    onSearch({ name, value, inputRef });
  }, [onSearch]);

  return (
    <>
      <div className={`input-wrapper ${className}`}>
        <input ref={inputRef} name={name} placeholder={placeholder} type={type} {...restProps} />
        {icon && <SearchIcon onClick={handleSearch} width='24px' className='-ml-2 mr-2 cursor-pointer hover:opacity-70' fill='white' />}
      </div>
      {fieldError && <p className='text-[#dc5c5c] text-sm'>{fieldError}</p>}
    </>
  );
};
export default Input;

Input.propTypes = {
  onSearch: PropTypes.func,
  icon: PropTypes.bool,
  validation: PropTypes.func,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  fieldError: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
};
