import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Heading from '../heading/Heading';
import './form.css';
import Button from '../button';
import { useRef } from 'react';
import { postApiResponse } from '../../apis';

export default function LoginForm({ onSuccess }) {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    await postApiResponse({
      endPoint: 'login',
      data: data,
      success: (result) => {
        alert(result?.message || 'success');
        onSuccess()
      },
      fail: (err) => {
        alert(err?.message || 'error msg');
      },
    });
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} className='p-6 lg:w-96'>
      <Heading size='lg' title='Welcome back!' className='text-center mb-10' />
      <div className='mb-6'>
        <Heading className='mb-2' size='xs' title='EMAIL ADDRESS' />
        <Input className='input-class' placeholder='admin@gmail.com' name='email' type='email' required />
      </div>
      <div className='mb-6'>
        <Heading className='mb-2' size='xs' title='PASSWORD' />
        <Input minLength='6' className='input-class' placeholder='Password' name='password' type='password' required />
      </div>
      <div className='flex justify-between mb-6'>
        <div className='flex items-center gap-2'>
          <input type='checkbox' name='isRemember' />
          <Heading size='xs' title='Remember me' />
        </div>
        <Heading size='xs' className=' text-secondary-600' title='Forgot password?'></Heading>
      </div>
      <Button type='submit' className='h-10 bg-secondary-600 hover:opacity-70' title='Login' />
    </form>
  );
}

LoginForm.propTypes = {
  onSuccess: PropTypes.func,
};
