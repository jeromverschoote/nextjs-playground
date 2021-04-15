import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useAuth = (): any => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser]: [any, any] = useState(null);

  const handleLogin = (user: any) => {
    setUser(user);
    router.push('/');
  };

  const handleLogout = () => {
    setUser(null);
    router.push('/');
  };

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }

    if (!user) {
      setIsLoggedIn(false);
    }
  }, [user]);

  return {
    user,
    isLoggedIn,
    handleLogin,
    handleLogout,
  };
};
