import { AuthContext } from 'contexts/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { fetchLogin } from 'service/request';
import { setSessionJWT } from 'utils/session';

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [username, setUsername] = useState('duongbich.dev94@gmail.com');
  const [password, setPassword] = useState('demo1234');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetchLogin(username, password);

      setAuth && setAuth(res);
      setSessionJWT(res, true);
      navigate('/');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className='flex items-center min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <form className='w-full min-h-screen px-4 py-16 mx-auto bg-secondary sm:w-45 sm:min-h-fit sm:px-6 sm:py-8 sm:rounded-md'>
        <div className='text-center mb-4'>
          <h3 className='text-white text-lg font-bold'>Welcome back!</h3>
          <p className='text-gray-500'>We're so excited to see you again.</p>
        </div>

        <div className='text-gray-300 mb-4'>
          <label className='font-bold'>EMAIL OR PHONE NUMBER</label>
          <input
            type='text'
            className='block mt-0.5 bg-slate-900 w-full p-2 rounded focus:outline-none'
            autoFocus
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className='text-gray-300'>
          <label className='font-bold'>PASSWORD</label>
          <input
            type='text'
            className='block mt-0.5 bg-slate-900 w-full p-2 rounded focus:outline-none'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className='flex justify-between mt-1'>
          <Link to='/forgot-password' className='text-blue-500'>
            Forgot your password?
          </Link>
          <Link to='/register' className='text-blue-500'>
            Create an account
          </Link>
        </div>

        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 mt-4 mb-8 border border-transparent text-sm font-semibold rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'
          onClick={handleLogin}
        >
          Log in
        </button>

        <div className='relative h-px border-t border-solid border-slate-400'>
          <p className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 px-3 bg-secondary text-gray-300'>
            OR
          </p>
        </div>

        <div className='mt-6 sm:flex'>
          <button
            type='button'
            className='w-full flex justify-center items-center py-2 my-2 border border-transparent text-sm font-semibold rounded text-white bg-transparent border-2 border-solid border-rose-500 focus:outline-none sm:mr-2'
          >
            <FaGoogle className='text-rose-500 -mt-px mr-1' />
            Sign in with Google
          </button>
          <button
            type='button'
            className='w-full flex justify-center items-center py-2 my-2 border border-transparent font-semibold rounded text-white bg-transparent border-2 border-solid border-sky-600 focus:outline-none sm:ml-2'
          >
            <FaFacebookF className='text-sky-600 -mt-px mr-1' />
            Sign in with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
