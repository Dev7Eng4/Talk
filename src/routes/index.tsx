import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import App from '../pages/app';
import { setupInterceptor } from 'service/configAxios';
import { AuthProvider } from 'contexts/auth';
import Profile from 'pages/profile/Profile';
import Setting from 'pages/setting/Setting';

const AppRouter = () => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    setupInterceptor(navigate);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<Login />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='*' element={<App />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppRouter;
