import { createContext } from 'react';
import { UserType } from 'src/types/User';

export default createContext({
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    emailAddress: '',
    imageUrl: '',
  },
  isLoggedIn: false,
  handleLogin: (user: UserType) =>
    console.log(`User ${user} is correctly logged in.`),
  handleLogout: () => console.log(`User is correctly logged out.`),
});
