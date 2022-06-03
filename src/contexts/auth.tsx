import React, { useState } from 'react';
import { Auth } from 'service/types/Auth';

interface Props {
  children: React.ReactNode;
}

interface AuthContextType {
  auth: Auth;
  setAuth?: React.Dispatch<React.SetStateAction<Auth>>;
}

const initialValue: Auth = {
  access_token: '',
  expires_in: 0,
  refresh_token: '',
  token_type: 'Bearer',
  user: {
    id: '',
    name: {
      firstName: '',
      middleName: '',
      lastName: '',
    },
    status: 'offline',
  },
};

export const AuthContext = React.createContext<AuthContextType>({
  auth: initialValue,
});

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(initialValue);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
