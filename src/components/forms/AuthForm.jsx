import { useContext, useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SingUpForm';
import { LoggedContext } from '../../layout/Navbar';

export default function AuthForm() {
  const { toggleLoggedTo } = useContext(LoggedContext);
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <>
      {isLoginForm ? <LoginForm onSuccess={() => toggleLoggedTo(true)} /> : <SignUpForm onSuccess={() => setIsLoginForm(true)} />}
      <div className='border-t  border-t-primary-600 text-center text-sm flex items-center justify-center py-6'>
        {isLoginForm ? (
          <>
            <p>Don&apos;t have an account?</p>
            <span onClick={() => setIsLoginForm(false)} className='text-secondary-600 ml-1 cursor-pointer'>
              Register
            </span>
          </>
        ) : (
          <>
            <p> Have an account?</p>
            <span onClick={() => setIsLoginForm(true)} className='text-secondary-600 ml-1 cursor-pointer'>
              Login
            </span>
          </>
        )}
      </div>
    </>
  );
}
