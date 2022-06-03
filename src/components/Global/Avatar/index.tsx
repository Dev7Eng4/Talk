import React from 'react';
import avatar from 'assets/avatar.jpeg';

interface Props {
  image: string;
  status?: 'online' | 'offline' | 'busy' | '';
}

const Avatar = ({ image, status = '' }: Props) => {
  return (
    <div className='relative shrink-0 w-8 h-8 mr-1 rounded-full bg-red-20 cursor-pointer'>
      <img src={image} alt='' className='rounded-full' />
      {!!status && (
        <span
          className={`block p-1 absolute bottom-px right-px bg-white rounded-full after:w-2 after:h-2 after:absolute after:inset-1/2 after:-translate-x-2/4 after:-translate-y-2/4 after:rounded-full ${
            status === 'online' ? 'after:bg-green-500' : 'after:bg-red-500'
          }`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
