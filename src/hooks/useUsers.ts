import { useQuery } from 'react-query';
import MethodEnum from 'src/enums/Method';
import { PostType } from 'src/types';

export const useUsers = (): any => {
  const users = useQuery('users', async () => {
    const result = await fetch(`/api/users`);
    return result.json();
  });

  const handleReadUser = async (id: number) => {
    const result = await fetch(`/api/user/${id}`, {
      method: MethodEnum.Get,
    });

    return result.json();
  };

  const handleCreateUser = async (post: PostType) => {
    const result = await fetch(`/api/user`, {
      method: MethodEnum.Post,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });

    return result.json();
  };

  const handleUpdateUser = async (id: number, post: PostType) => {
    const result = await fetch(`/api/user/${id}`, {
      method: MethodEnum.Patch,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });

    return result.json();
  };

  const handleDeleteUser = async (id: number) => {
    const result = await fetch(`/api/user/${id}`, {
      method: MethodEnum.Delete,
    });

    return result.json();
  };

  return {
    users,
    handleReadUser,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
  };
};
