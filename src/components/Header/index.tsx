import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

import logo from '../../assets/default-logo.png';
import { AuthContext } from 'contexts/auth';
import { getFullName } from 'utils/convert';
import defaultAvatar from 'assets/avatar.png';
import { Channel } from 'service/types/Channel';
import Input from 'components/Global/Input';

interface Props {
  channel: Channel | undefined;
  onToggleNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ channel, onToggleNavbar }: Props) => {
  const { user } = useContext(AuthContext).auth;
  const [theme, setTheme] = useState(false);

  console.log('chang', channel);

  const fullName = getFullName(user);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return (
    <header className='flex items-center justify-between pr-4 bg-white shadow border-b border-solid border-slate-600 dark:bg-secondary'>
      <div className='flex items-center lg:hidden'>
        <span className='text-xl p-2 mr-2 rounded-full cursor-pointer text-black active:bg-gray-300 dark:active:bg-gray-600 dark:text-white'>
          <FaBars onClick={() => onToggleNavbar(true)} />
        </span>
        <img src={logo} alt='Talk' className='w-10 h-10 rounded-full' />
      </div>

      {!!channel && (
        <h2 className='p-4 text-base text-gray-100 font-bold'>
          <span className='flex items-center cursor-pointer'>
            <span className='mr-2 text-xl text-gray-400'>#</span>
            {channel.name}
            <FaChevronDown className='ml-2' />
          </span>
        </h2>
      )}

      {/* <h2 className='p-4 sticky top-0 z-50 text-base text-gray-100 font-bold bg-indigo-500'>
        <span className='flex items-center cursor-pointer'>
          <span className='mr-2 text-xl text-gray-400'>#</span> This is channel
          name
          <FaChevronDown className='ml-2' />
        </span>
      </h2> */}

      <div></div>
      <div className='flex items-center px-4'>
        {/* <input
          type='search'
          className='block w-80 m-4 px-4 py-2 border-solid border border-slate-200 rounded-3xl focus:outline-none'
        /> */}
        <Input type='search' wrapClass='w-80 my-4 mr-4 px-4' />

        <span className='flex items-center text-black font-bold dark:text-white'>
          <span className='block w-8 h-8 mr-1 rounded-full bg-red-200'>
            <img src={user.avatar ?? defaultAvatar} alt='Avatar User' />
          </span>
          <span>{fullName}</span>
        </span>

        <span
          className='ml-2 text-primary text-3xl cursor-pointer'
          onClick={() => setTheme((prev) => !prev)}
        >
          {theme ? <MdOutlineLightMode /> : <MdDarkMode />}
        </span>
      </div>
    </header>
  );
};

export default Header;
