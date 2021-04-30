import { useQuery } from 'react-query';

import MethodEnum from 'src/enums/Method';
import { PostType } from 'src/types';

export const handleReadPosts = async (): Promise<PostType[]> => {
  const result = await fetch(`/api/posts`, {
    method: MethodEnum.Get,
  });

  return result.json();
};

export const handleReadPost = async (id: number): Promise<PostType> => {
  const result = await fetch(`/api/posts/${id}`, {
    method: MethodEnum.Get,
  });

  return result.json();
};

export const handleCreatePost = async (post: PostType): Promise<PostType[]> => {
  const result = await fetch(`/api/posts`, {
    method: MethodEnum.Post,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post }),
  });

  return result.json();
};

export const handleUpdatePost = async (
  id: number,
  post: PostType,
): Promise<PostType[]> => {
  const result = await fetch(`/api/posts/${id}`, {
    method: MethodEnum.Patch,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post }),
  });

  return result.json();
};

export const handleDeletePost = async (id: number): Promise<PostType[]> => {
  const result = await fetch(`/api/posts/${id}`, {
    method: MethodEnum.Delete,
  });

  return result.json();
};

export const usePosts = (): any => {
  return {
    posts: useQuery(['posts'], handleReadPosts),
    handleReadPost: (id: number) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(['posts', { id }], () => handleReadPost(id)),
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
  };
};
