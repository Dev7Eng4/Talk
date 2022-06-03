import React, { useRef, useState } from 'react';
import { IoCall } from 'react-icons/io5';
import { FaVideo, FaTimes, FaSmile } from 'react-icons/fa';
import { HiMinus } from 'react-icons/hi';
import { AiFillPlusCircle } from 'react-icons/ai';
import Picker, { IEmojiData } from 'emoji-picker-react';
import { messages } from '../../mock/message';
import { User } from '../../service/types/User';
import { useClickOutSide } from 'hooks';
import Chat from './Chat';

interface Props {
  user: User;
  onClose: () => void;
}

const Message = ({ user, onClose }: Props) => {
  const [actions] = useState([
    {
      icon: <IoCall />,

      handleClick: () => {},
    },
    {
      icon: <FaVideo />,
      handleClick: () => {},
    },
    // {
    //   icon: <HiMinus />,
    //   handleClick: () => {},
    // },
    {
      icon: <FaTimes />,
      handleClick: onClose,
    },
  ]);

  return (
    <div className='w-72 fixed bottom-0 right-40 z-50 rounded-t-lg bg-red-400'>
      <div className='relative flex items-center px-2 py-3 rounded-t-lg bg-zinc-400'>
        <div>
          <p className='font-bold'>{user.name.firstName}</p>
        </div>

        <div className='ml-auto flex items-center'>
          {actions.map((action, index) => (
            <span
              key={index}
              className='p-1.5 rounded-full text-lg cursor-pointer hover:bg-gray-300'
              onClick={action.handleClick}
            >
              {action.icon}
            </span>
          ))}
        </div>
      </div>

      <div className='h-72 py-1 overflow-y-auto scroll-transparent'>
        {messages.map((message) => (
          <div className='flex items-center m-2' key={message.id}>
            <div
              className={`p-1.5 pt-2 max-w-[75%] rounded bg-gray-300 ${
                message.status === 'Sent' ? 'ml-auto bg-green-300' : ''
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <Chat />
    </div>
  );
};

export default Message;
