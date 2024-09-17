export type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type UserState = {
  data: UserProps[] | null;
  isLoading: boolean;
  isError: boolean;
};

export type FormValues = {
  name: string;
  username: string;
  email: string;
  phone: string;
};
