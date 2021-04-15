import { createContext } from 'react';

export default createContext({
  user: null,
  isLoggedIn: false,
  handleLogin: (user: any) =>
    console.log(`User ${user} is correctly logged in.`),
  handleLogout: () => console.log(`User is correctly logged out.`),
});
