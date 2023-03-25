import { type } from 'os';

export type UsersType = {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  map?: () => any;
};

export type UserInfo = {
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};
