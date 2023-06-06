import { UserRole } from './user-role';

export type TUser = {
  id?: number | null;
  fullname?: string;
  role?: UserRole | null;
  vk?: string;
  photo?: string;
  phone?: string;
  address?: string;
  coordinates?: number[];
  approved?: boolean | null;
  checked?: boolean | null;
  keys?: boolean | null;
  adminStatus?: number;
  scores?: number | null;
  completed?: number | null;
};

export type TTask = {
  id: number;
  title: string;
  category: {
    id: number;
    name: string;
  };
  date: string;
  description: string;
  completed: boolean;
  recipient: TUser;
  volunteer: TUser | null;
  address: string;
  coordinates: number[];
  chatId: number | null;
};

export type TCategory = {
  id: number;
  name: string;
  scope: number;
};
