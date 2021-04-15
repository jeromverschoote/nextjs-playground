import { useQuery } from 'react-query';

export const useUsers = (): any =>
  useQuery('users', async () => {
    const result = await fetch(`/api/users`);
    return result.json();
  });
