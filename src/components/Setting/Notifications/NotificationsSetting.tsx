import Switch from 'components/Global/CheckBox/Switch';
import React, { useState } from 'react';

interface Props {
  loading: boolean;
}

type NotificationField = keyof typeof defaultNotifications;

const defaultNotifications = {
  desktop: true,
  allSound: false,
  message: false,
  userJoin: false,
};

const keys = Object.keys(defaultNotifications);

const NotificationsSetting = ({ loading }: Props) => {
  const [notifications, setNotifications] = useState(defaultNotifications);

  const handleToggle = (noti: NotificationField) => {
    setNotifications((prev) => ({ ...prev, [noti]: !prev[noti] }));
  };

  return (
    <div>
      <div>
        <h2 className='inline-block mb-4 text-white font-bold text-xl after:block after:w-18 after:h-px after:bg-gray-400'>
          Notifications
        </h2>

        <Switch
          checked={notifications.desktop}
          label='Enable Desktop Notifications'
          onToggle={handleToggle}
          name={keys[0]}
        />
      </div>

      <div className='mt-4'>
        <h2 className='inline-block mb-4 text-white font-bold text-xl after:block after:w-18 after:h-px after:bg-gray-400'>
          Sounds
        </h2>

        <Switch
          checked={notifications.allSound}
          label='Disabled All Notification Sounds'
          onToggle={handleToggle}
          classMore='mb-2'
          name={keys[1]}
        />
        <Switch
          checked={notifications.message}
          label='Message'
          onToggle={handleToggle}
          classMore='mb-2'
          name={keys[2]}
        />
        <Switch
          checked={notifications.userJoin}
          label='User Join'
          onToggle={handleToggle}
          name={keys[3]}
        />
      </div>
    </div>
  );
};

export default NotificationsSetting;
