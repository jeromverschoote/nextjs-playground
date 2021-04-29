import { useQuery } from 'react-query';
import MethodEnum from 'src/enums/Method';
import { PostType } from 'src/types';

export const usePosts = (): any => {
  const posts = useQuery('posts', async () => {
    const result = await fetch(`/api/posts`);
    return result.json();
  });

  const handleReadPost = async (id: number) => {
    const result = await fetch(`/api/post/${id}`, {
      method: MethodEnum.Get,
    });

    return result.json();
  };

  const handleCreatePost = async (post: PostType) => {
    const result = await fetch(`/api/post`, {
      method: MethodEnum.Post,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });

    return result.json();
  };

  const handleUpdatePost = async (id: number, post: PostType) => {
    const result = await fetch(`/api/post/${id}`, {
      method: MethodEnum.Patch,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });

    return result.json();
  };

  const handleDeletePost = async (id: number) => {
    const result = await fetch(`/api/post/${id}`, {
      method: MethodEnum.Delete,
    });

    return result.json();
  };

  return {
    posts,
    handleReadPost,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
  };
};
