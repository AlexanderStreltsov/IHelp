import { TTask, TUser } from './entities';

export type TCreateUserRequest = Omit<
  TUser,
  | 'id'
  | 'approved'
  | 'checked'
  | 'keys'
  | 'adminStatus'
  | 'scores'
  | 'completed'
>;

export type TUpdateUserRequest = Partial<Omit<TUser, 'id' | 'adminStatus'>>;

export type TCreateTaskRequest = Omit<
  TTask,
  'id' | 'category' | 'recipient' | 'volunteer' | 'completed '
> & {
  categoryId: number;
  recipientId: number;
  volunteerId: number;
};

export type TUpdateTaskRequest = Partial<TCreateTaskRequest>;
