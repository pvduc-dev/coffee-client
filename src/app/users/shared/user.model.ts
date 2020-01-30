export interface User {
  _id: string;
  email: string;
  password: string;
  roles: string[];
  firstName: string;
  lastName: string;
  active: boolean;
}
