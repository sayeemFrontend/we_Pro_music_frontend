import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>{children}</div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};
