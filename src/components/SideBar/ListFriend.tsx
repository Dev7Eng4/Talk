import Avatar from 'components/Global/Avatar';
import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { User } from 'service/types/User';
import avatar from 'assets/avatar.jpeg';

interface Props {
  title: string;
  users: User[];
  show: boolean;
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
  onSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const ListFriend = ({ title, users, show, onShow, onSelectedUser }: Props) => {
  return (
    <>
      <p
        className='flex items-center p-2 cursor-pointer text-base text-black font-bold hover:text-primary dark:text-white dark:hover:text-primary'
        onClick={() => onShow((prev) => !prev)}
      >
        {title}
        <BsFillCaretDownFill
          className={`ml-1 transition-transform duration-200 ${
            show ? '' : '-rotate-90'
          }`}
        />
      </p>

      <div className={`overflow-hidden ${show ? '' : 'h-0'}`}>
        {users.map((user) => (
          <div
            className='flex items-center my-1 p-2 text-black font-bold rounded cursor-pointer hover:bg-slate-700 dark:text-white'
            onClick={() => onSelectedUser(user)}
            // onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) =>
            //   handleHover(e, user.id)
            // }
            key={user.id}
          >
            <Avatar image={user.avatar || avatar} status={user.status} />
            {/* <span className='block relative w-8 h-8 mr-1 rounded-full bg-red-200'>
              {user.avatar}
              <span
                className={`block p-1 absolute bottom-0.5 right-0.5 bg-white rounded-full after:w-1.5 after:h-1.5 after:absolute after:inset-1/2 after:-translate-x-2/4 after:-translate-y-2/4 after:rounded-full ${
                  user.status === 'online'
                    ? 'after:bg-green-500'
                    : 'after:bg-red-500'
                }`}
              ></span>
            </span> */}
            <span className='pt-0.5'>{user.name.firstName}</span>
          </div>
        ))}
      </div>

      <span className='block w-full h-px mx-auto my-2 bg-gray-100'></span>
    </>
  );
};

export default ListFriend;
