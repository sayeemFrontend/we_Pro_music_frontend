import PropTypes from 'prop-types';

import { useRef } from 'react';
import Input from '../Input/Input';
import Button from '../button';
import Heading from '../heading/Heading';
import './form.css';
import { postApiResponse } from '../../apis';
import { cookies } from '../../apis/cookies';

export default function SignUpForm({ onSuccess }) {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    await postApiResponse({
      endPoint: 'register',
      data,
      success: (result) => {
        alert(result?.message || 'success');
        cookies.setCookies('m_t', result.data.token);
        onSuccess()
      },
      fail: (err) => {
        alert(err?.message || 'error msg');
      },
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='p-6 lg:w-96'>
      <Heading size='lg' title='Create an Account' className='text-center mb-10' />
      <div className='mb-6'>
        <Heading className='mb-2' size='xs' title='YOUR NAME' />
        <Input className='input-class' placeholder='Name' name='email' type='text' required />
      </div>
      <div className='mb-6'>
        <Heading className='mb-2' size='xs' title='EMAIL ADDRESS' />
        <Input className='input-class' placeholder='admin@gmail.com' name='name' type='text' required />
      </div>
      <div className='mb-6'>
        <Heading className='mb-2' size='xs' title='PASSWORD' />
        <Input className='input-class' placeholder='Password' name='password' type='password' required />
      </div>

      <div className='mb-6'>
        <Heading className='mb-2' size='xs' title='CONFIRM PASSWORD' />
        <Input className='input-class' placeholder='Confirm Password' name='password2' type='password' required />
      </div>

      <Button type='submit' className='h-10 bg-secondary-600 hover:opacity-70' title='SignUp' />
    </form>
  );
}

SignUpForm.propTypes = {
  onSuccess: PropTypes.func,
};
