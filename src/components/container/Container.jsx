import PropTypes from 'prop-types';

export default function Container({ children, className }) {
  return <div className={`container mx-auto px-2 ${className}`}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};
