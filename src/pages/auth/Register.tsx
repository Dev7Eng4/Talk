import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex items-center min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <form className='w-full min-h-screen px-4 py-16 mx-auto bg-secondary sm:w-45 sm:min-h-fit sm:px-6 sm:py-8 sm:rounded-md'>
        <div className='text-center mb-4'>
          <h3 className='text-white text-lg font-bold'>Create an account</h3>
        </div>

        <div className='text-gray-300 mb-4'>
          <label className='font-bold'>EMAIL</label>
          <input
            type='text'
            className='block mt-0.5 bg-slate-900 w-full p-2 rounded focus:outline-none'
            autoFocus
          />
        </div>

        <div className='text-gray-300 mb-4'>
          <label className='font-bold'>USERNAME</label>
          <input
            type='text'
            className='block mt-0.5 bg-slate-900 w-full p-2 rounded focus:outline-none'
          />
        </div>

        <div className='text-gray-300 mb-4'>
          <label className='font-bold'>PASSWORD</label>
          <input
            type='text'
            className='block mt-0.5 bg-slate-900 w-full p-2 rounded focus:outline-none'
          />
        </div>

        <div className='flex items-center'>
          <input type='checkbox' id='optional' />
          <label
            htmlFor='optional'
            className='pl-2 text-gray-500 cursor-pointer'
          >
            It's okay to send me emails about Talk.
          </label>
        </div>

        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 mt-4 border border-transparent text-sm font-semibold rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'
        >
          Create
        </button>

        <div className='mt-1'>
          <Link to='/forgot-password' className='text-blue-500'>
            Already have an account?
          </Link>
        </div>

        <p className='mt-3 text-gray-500 text-xs'>
          By continuing, you're agreeing to our{' '}
          <a href='' className='text-blue-600'>
            Terms of Service
          </a>{' '}
          and{' '}
          <a href='' className='text-blue-600'>
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
