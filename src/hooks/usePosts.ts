import { useQuery } from 'react-query';

export const usePosts = (): any =>
  useQuery('posts', async () => {
    const result = await fetch(`/api/posts`);
    return result.json();
  });
