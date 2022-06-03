import React from 'react';
import { ReactComponent as LoadingSVG } from 'assets/svg/loading.svg';

const Loading = () => {
  return (
    <div className='h-full flex items-center'>
      <LoadingSVG className='w-16 !bg-transparent' />;
    </div>
  );
};

export default Loading;
