import { User } from 'service/types/User';

export const getFullName = (user: User) => {
  const arrName = [user.name.firstName, user.name.lastName];

  return arrName.join(' ').trim();
};
