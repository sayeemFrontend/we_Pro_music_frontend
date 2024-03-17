import PropTypes from 'prop-types';

export default function Heading({ children, size = 'xs', title, ...props }) {
  const classObject = {
    xl: 'text-xl 2xl:text-2xl font-bold',
    lg: 'text-lg 2xl:text-xl font-semibold',
    md: 'text-base 2xl:text-lg  font-medium',
    sm: 'text-sm 2xl:text-base font-medium',
    xs: 'text-xs 2xl:text-sm font-medium',
  };
  return (
    <p className={`${classObject[size]}`} {...props}>
      {children ? children : title}
    </p>
  );
}

Heading.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  title: PropTypes.string,
};
