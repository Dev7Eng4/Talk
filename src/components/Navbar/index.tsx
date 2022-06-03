import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/default-logo.png';
import { Channel } from '../../service/types/Channel';

interface Props {
  channels: Channel[];
  active: Channel | undefined;
  open: boolean;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
  onActive: React.Dispatch<React.SetStateAction<Channel | undefined>>;
}

const navClass = (isSkeleton: boolean) =>
  `w-60 py-1.5 px-1.5 flex items-center group rounded outline-none hover:bg-slate-700 before:content-[""] before:absolute before:top-2/4 before:left-0 before:-translate-y-2/4 before:w-1 before:h-0 before:bg-white before:rounded-r-xl before:transition-all before:duration-300 ${
    isSkeleton ? 'cursor-default' : 'hover:before:h-5'
  }`;

const Navbar = ({ channels, open, active, onToggle, onActive }: Props) => {
  return (
    <nav
      className={`absolute top-0 duration-500 lg:relative lg:left-0 shrink-0 ${
        open ? 'left-0' : '-left-full'
      }`}
    >
      <div className='flex items-center h-header px-4 bg-white border-solid border-b border-slate-600 dark:bg-secondary'>
        <span className='text-xl p-2 mr-2 rounded-full cursor-pointer text-black active:bg-gray-300 dark:active:bg-gray-600 dark:text-white lg:hidden'>
          <FaBars onClick={() => onToggle(false)} />
        </span>

        <img src={logo} alt='Talk' className='w-12 h-12' />
      </div>

      <ul className='h-e-header pb-2 overflow-y-auto scroll-transparent shadow bg-white dark:bg-secondary'>
        {channels.map((channel: Channel, index: number) => (
          <li
            className={`relative block py-1 px-3 ${index === 0 ? 'pt-2' : ''}`}
            key={`${channel.id}_${index}`}
          >
            <NavLink
              to={channel.id ? channel.id : ''}
              className={({ isActive }) =>
                isActive && channel.id
                  ? `${navClass(
                      !channel.id
                    )} bg-slate-600 hover:bg-slate-600 before:h-8 hover:before:h-8`
                  : `${navClass(!channel.id)}`
              }
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!channel.id) {
                  e.preventDefault();
                  return;
                }
                onActive(channel);
              }}
            >
              <span className='w-8 h-8 shrink-0 rounded-lg overflow-hidden skeleton'>
                {channel.id && (
                  <img
                    src={channel.logo || logo}
                    alt={channel.name}
                    className='w-8 h-8 rounded-lg transition-all duration-200'
                  />
                )}
              </span>
              <span className='w-full ml-2 text-base text-black font-semibold text-2-line truncate dark:text-white skeleton skeleton-text'>
                {channel.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
