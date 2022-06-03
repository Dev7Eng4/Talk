import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loading from 'components/Global/Loading';
import Input from 'components/Global/Input';
import Button from 'components/Global/Button';

interface Props {
  loading: boolean;
}

interface Inputs {
  email: string;
  phoneNumber: string;
  password: string;
}

// const validateSchema = yup.object({
//   email:
// })

const AccountSetting = ({ loading }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <div className='h-60 bg-red-200 rounded'></div>

            <div className='flex items-center'>
              <div className='p-2 relative -top-7 left-3 bg-gray-600 rounded-full'>
                <div className='w-24 h-24 bg-slate-300 rounded-full'>
                  <img src='' alt='' />
                </div>
              </div>
              <h2 className='-mt-10 ml-7 text-xl font-bold text-white'>Name</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('email')}
              wrapClass='mb-4'
              error={errors.email?.message}
            />
            <Input
              {...register('phoneNumber')}
              wrapClass='mb-4'
              error={errors.phoneNumber?.message}
            />
            <Input
              {...register('password')}
              wrapClass='mb-4'
              error={errors.password?.message}
            />

            <Button>Save</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default AccountSetting;
