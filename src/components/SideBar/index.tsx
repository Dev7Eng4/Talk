import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';
import { User } from '../../service/types/User';
import Message from '../Message/Message';
import ListFriend from './ListFriend';

interface Props {
  isActiveChannel: boolean;
  users: User[];
}

const SideBar = ({ isActiveChannel, users }: Props) => {
  const [openListGroup, setOpenListGroup] = useState(false);
  const [openListFriend, setOpenListFriend] = useState(true);
  const [openListMember, setOpenListMember] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User>();

  const handleCloseChat = () => {
    setSelectedUser(undefined);
  };

  const handleHover = (e: React.MouseEvent<HTMLDivElement>, userId: string) => {
    console.log('user', userId);
  };

  return (
    <div className='h-e-header w-60 p-2 shrink-0 relative overflow-y-auto scroll-transparent bg-white dark:bg-secondary shadow-md'>
      {isActiveChannel && (
        <ListFriend
          title='Members'
          users={users}
          show={openListMember}
          onShow={setOpenListMember}
          onSelectedUser={setSelectedUser}
        />
      )}

      <ListFriend
        title='Friend Contacts'
        users={users}
        show={openListFriend}
        onShow={setOpenListFriend}
        onSelectedUser={setSelectedUser}
      />

      <p
        className='flex items-center p-2 cursor-pointer text-base text-black font-bold hover:text-primary dark:text-white dark:hover:text-primary'
        onClick={() => setOpenListMember((prev) => !prev)}
      >
        Group conversations
        <BsFillCaretDownFill
          className={`ml-1 transition-transform duration-200 ${
            openListMember ? '' : '-rotate-90'
          }`}
        />
      </p>

      <button className='flex items-center p-2 w-full rounded text-dark hover:bg-slate-700 dark:text-white'>
        <span className='p-1 mr-2 -mt-0.5 text-2xl rounded-full bg-red-200'>
          <BiPlus />
        </span>
        Create new group
      </button>

      {selectedUser && (
        <Message user={selectedUser} onClose={handleCloseChat} />
      )}
    </div>
  );
};

export default SideBar;
