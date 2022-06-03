import React, { lazy, Suspense, useEffect, useState } from 'react';

import Loading from 'components/Global/Loading';
import SettingBar from 'components/Setting/SettingBar';
import SettingCommon from './SettingCommon';
import { render } from '@testing-library/react';
import NotPageFound from 'pages/NotPageFound';
import { getAccountSetting } from 'service/request';

const AccountSetting = lazy(
  () => import('components/Setting/Account/AccountSetting')
);
const ProfileSetting = lazy(
  () => import('components/Setting/Profile/ProfileSetting')
);
const ConnectionSetting = lazy(
  () => import('components/Setting/Connection/ConnectionSetting')
);
const NotificationsSetting = lazy(
  () => import('components/Setting/Notifications/NotificationsSetting')
);
const LanguageSetting = lazy(
  () => import('components/Setting/Language/LanguageSetting')
);

export type Tab = typeof settings;
export type SubTab = typeof settings[number]['subs'][number];

const settings = [
  {
    label: 'USER SETTINGS',
    subs: ['My Account', 'User Profile', 'Connections'],
  },
  {
    label: 'APP SETTINGS',
    subs: [
      'Voice & Video',
      'Text & Images',
      'Notifications',
      'Keybinds',
      'Language',
      'Advanced',
    ],
  },
] as const;

const settingTab = window.sessionStorage.getItem('settingTab') as SubTab;

const Setting = () => {
  const [activeTab, setActiveTab] = useState<SubTab>(
    settingTab ?? 'My Account'
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('in');
    window.sessionStorage.setItem('settingTab', activeTab);
    switch (activeTab) {
      case 'My Account':
        handleAccountSetting();
        break;
      case 'User Profile':
        break;
      default:
        break;
    }
  }, [activeTab]);

  const handleAccountSetting = async () => {
    try {
      setLoading(true);
      const res = await getAccountSetting();

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('error', err);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'My Account':
        return <AccountSetting loading={loading} />;
      case 'User Profile':
        return <ProfileSetting loading={loading} />;
      case 'Notifications':
        return <NotificationsSetting loading={loading} />;
      case 'Language':
        return <LanguageSetting />;
      default:
        return <NotPageFound />;
    }
  };

  return (
    <div className='flex h-screen'>
      <SettingBar
        activeTab={activeTab}
        settings={settings}
        onActiveTab={setActiveTab}
      />
      <div className='h-full overflow-y-auto grow p-6 bg-gray-600'>
        <Suspense fallback={<Loading />}>{renderTabContent()}</Suspense>
      </div>
    </div>
  );
};

export default Setting;
