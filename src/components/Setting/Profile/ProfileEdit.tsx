import React, { useRef } from 'react';
import { FaPen } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from 'components/Global/Button';
import { Profile } from './ProfileSetting';
import Input from 'components/Global/Input';

interface Props {
  header: (label: string) => React.ReactNode;
  profile: Profile;
  onProfileChange: React.Dispatch<React.SetStateAction<Profile>>;
}

interface Inputs {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  address: string;
  company: string;
  birthDate: string;
  bio: string;
}

const ProfileEdit = ({ header, profile, onProfileChange }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  const handleColorChange = () => {
    inputRef.current?.click();
  };

  return (
    <form className='w-2/4 grow mr-4'>
      <div>
        {header('AVATAR')}
        <Button>Upload Avatar</Button>
      </div>

      <div className='mt-6'>
        {header('PROFILE BANNER')}
        <p className='text-white'>
          We recommend an image of at least 600x240. You can upload a PNG, JPG,
          or an animated GIF under 10MB.
        </p>
        <div className='mt-3'>
          <Button>Upload Banner Image</Button>
          <span
            className='relative block w-16 h-10 mt-3 rounded cursor-pointer'
            style={{
              backgroundColor: profile.banner.color,
            }}
            onClick={handleColorChange}
          >
            <FaPen className='absolute top-1 right-1 text-white' />
          </span>
          <input
            ref={inputRef}
            type='color'
            className='h-px w-px invisible'
            value={profile.banner.color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onProfileChange((prev) => ({
                ...prev,
                banner: { ...prev.banner, color: e.target.value },
              }));
            }}
          />
        </div>
      </div>

      <div className='mt-2'>
        {header('ABOUT ME')}

        <div className='flex mb-3'>
          <Input
            label='First Name'
            wrapClass='w-4/12 mr-2'
            value={profile.name.firstName}
          />
          <Input label='Middle Name' wrapClass='w-4/12 mx-2' />
          <Input label='Last Name' wrapClass='w-4/12 ml-2' />
        </div>

        <div className='mb-3'>
          <p className='mb-1 text-gray-300'>Date of birth</p>
          <input type='date' className='p-2 rounded w-3/12' />
        </div>

        <div className='mb-3'>
          <Input label='Address' />
        </div>

        <div className='mb-3'>
          <Input label='Company' />
        </div>

        <div className='mb-3'>
          <p className='mb-1 text-gray-300'>Bio</p>
          <textarea
            id=''
            cols={50}
            rows={10}
            className='p-2 rounded focus:outline-none'
            value={profile.bio}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              onProfileChange((prev) => ({ ...prev, bio: e.target.value }));
            }}
          ></textarea>
        </div>
      </div>

      <Button className='mt-6'>Save</Button>
    </form>
  );
};

export default ProfileEdit;
