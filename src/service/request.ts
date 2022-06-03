import { axiosGet, axiosPost, axiosPatch, axiosDelete } from './configAxios';
import { authSchema } from './types/Auth';
import { channelCollectionSchema, channelSchema } from './types/Channel';
import { accountSettingSchema } from './types/Setting';
import { userCollectionSchema, userSchema } from './types/User';

type KeyURI = keyof typeof shareURI;

const apiV = 'v1';

const shareURI = {
  login: '/login',
  user: '/users',
  group: '/groups',
  message: '/messages',
  channel: '/channels',
  friend: '/friends',
  setting: (s: string) => `/settings/${s}`,
};

// const getUri = (name: KeyURI) => `/${apiV}/${shareURI[name]}`;

const createAxiosResponseError = () => new Error('Axios request return void.');
const createTypeguardError = () =>
  new Error('Typeguard could not validate response.');

export const getUser = async (signalCancel: AbortSignal) => {
  const res = await axiosGet('https://jsonplaceholder.typicode.com/todos', {
    axiosOptions: { signal: signalCancel },
  });

  return res;
};

// GET

export const getAccountSetting = async () => {
  const res = await axiosGet(shareURI.setting('user'));

  if (!res) {
    throw createAxiosResponseError();
  }

  const validResponse = userSchema.safeParse(res);

  if (!validResponse.success) {
    throw createTypeguardError();
  }

  return validResponse.data;
};

export const getChannels = async () => {
  const res = await axiosGet(shareURI.channel);

  if (!res) {
    throw createAxiosResponseError();
  }

  const validResponse = channelCollectionSchema.safeParse(res);

  if (!validResponse.success) {
    throw createTypeguardError();
  }

  return validResponse.data;
};

export const getFriends = async () => {
  const res = await axiosGet(shareURI.friend);

  if (!res) {
    throw createAxiosResponseError();
  }

  const validResponse = userCollectionSchema.safeParse(res);

  if (!validResponse.success) {
    throw createTypeguardError();
  }

  return validResponse.data;
};

// POST

export const fetchLogin = async (username: string, password: string) => {
  const res = await axiosPost(
    shareURI.login,
    { username, password },
    {
      axiosOptions: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      useAuth: false,
    }
  );

  console.log('valud', res);
  if (!res) {
    throw createAxiosResponseError();
  }

  const validResponse = authSchema.safeParse(res);

  if (!validResponse.success) {
    throw createTypeguardError();
  }

  return validResponse.data;
};

// PATCH

// PUT

// DELETE
