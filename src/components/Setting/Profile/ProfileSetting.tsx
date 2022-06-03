import React, { useCallback, useEffect, useState } from 'react';
import ProfileEdit from './ProfileEdit';
import ProfilePreview from './ProfilePreview';

interface Props {
  loading: boolean;
}

export type Profile = typeof defaultProfile;

const defaultProfile = {
  avatar: '',
  banner: {
    color: '#f09r00',
    image: '',
  },
  name: {
    firstName: '',
    middleName: '',
    lastName: '',
  },
  birthDate: '',
  address: '',
  company: '',
  bio: '',
};

const ProfileSetting = ({ loading }: Props) => {
  const [profile, setProfile] = useState<Profile>(defaultProfile);

  useEffect(() => {
    console.log('hi', profile);
  }, [profile]);

  const renderHeader = useCallback(
    (label: string) => (
      <h2 className='inline-block mb-4 text-white font-bold text-xl after:block after:w-18 after:h-px after:bg-gray-400'>
        {label}
      </h2>
    ),
    []
  );

  return (
    <div className='flex flex-col md:flex-row'>
      <ProfileEdit
        header={renderHeader}
        profile={profile}
        onProfileChange={setProfile}
      />
      <ProfilePreview header={renderHeader} profile={profile} />
    </div>
  );
};

export default ProfileSetting;
