import React from 'react';
import { Profile } from './ProfileSetting';

interface Props {
  header: (label: string) => React.ReactNode;
  profile: Profile;
}

const ProfilePreview = ({ header, profile }: Props) => {
  return (
    <div className='w-2/4 grow ml-4'>
      {header('Preview')}

      <div className='w-96 bg-secondary rounded overflow-hidden'>
        <div
          className='h-24 relative'
          style={{
            backgroundColor: `${profile.banner.color}`,
          }}
        >
          <div className='flex items-center absolute -bottom-16 left-2'>
            <div className='p-2 bg-secondary rounded-full'>
              <div className='w-20 h-20 bg-slate-300 rounded-full'>
                <img src='' alt='' />
              </div>
            </div>
            <h2 className='mt-2 ml-5 text-xl font-bold text-white'>UserName</h2>
          </div>
        </div>

        <div className='p-4 mt-16 text-white'>
          <p>
            <span className='font-semibold text-gray-200'>Date of birth:</span>{' '}
            <span className='text-gray-300'>09/07/1994</span>
          </p>
          <p>Address: HaNoi, VietNam</p>
          <p>Company: FPT Software</p>
          <p>Bio: Like movie, girls</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
