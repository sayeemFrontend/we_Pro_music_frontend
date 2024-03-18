import PropTypes from 'prop-types';

import Button from '../components/button';
import logo from '../assets/logo.svg';
import Heading from '../components/heading/Heading';
import { useNavigate } from 'react-router-dom';
import PopUp from '../components/popup/PopUp';
import AuthForm from '../components/forms/AuthForm';
import React, { createContext, useState } from 'react';
import LocalSearch from '../components/local-search/LocalSearch';
export const LoggedContext = createContext(null);

export default function Navbar() {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const toggleLoggedTo = React.useCallback((value) => {
    setLogged(value);
  }, []);

  return (
    <div className=' bg-primary-900'>
      <div className='container py-3 mx-auto px-2 flex flex-wrap items-center gap-4'>
        <ul className='flex items-center flex-1'>
          <img src={logo} alt='wePro' className='w-10 mr-4' />
          <Button onClick={() => navigate('/')}>
            <Heading size='md' title='WeGroMusic' />
          </Button>
        </ul>
        <ul className='order-3 md:order-2'>
          <LocalSearch />
        </ul>
        <ul className='order-2 md:order-3'>
          {logged ? (
            <LogoutButton onClick={() => toggleLoggedTo(false)} />
          ) : (
            <PopUp positionClass='top-16 -left-[260px]' header={LoginButton}>
              <LoggedContext.Provider value={{ logged, toggleLoggedTo }}>
                <AuthForm />
              </LoggedContext.Provider>
            </PopUp>
          )}
        </ul>
      </div>
    </div>
  );
}

const LoginButton = (
  <Button className='h-10 w-[86px] px-4 bg-secondary-600 rounded-sm hover:opacity-75 '>
    <Heading size='md' title='LOGIN' />
  </Button>
);

const LogoutButton = ({ onClick }) => (
  <Button onClick={onClick} className='h-10 w-[86px] px-4 bg-secondary-600 rounded-sm hover:opacity-75 '>
    <Heading size='md' title='Logout' />
  </Button>
);

LogoutButton.propTypes = {
  onClick: PropTypes.func,
};
