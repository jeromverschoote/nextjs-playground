import { PostType as Post } from 'src/types/Post';

interface Options {
  id?: number;
  userId?: number;
}

type Result = undefined | Post | Post[];

const DATA = [
  {
    id: 1,
    title: 'Hello Next.js!',
    text:
      'Today I build my first Next App. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    userId: 1,
  },
  {
    id: 2,
    title: 'Hello Flower!',
    text:
      'Today I picked my first flower. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    userId: 2,
  },
  {
    id: 3,
    title: 'Hello Pokemon!',
    text:
      'Today I caught my first Pokemon. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    userId: 3,
  },
  {
    id: 4,
    title: 'Hello Smartphone!',
    text:
      'Today I repaired my first smartphone. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    userId: 4,
  },
  {
    id: 5,
    title: 'Hello Bitcoin!',
    text:
      'Today I bought my first Bitcoin. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    userId: 5,
  },
];

export default {
  find: (options?: Options): Result => {
    let result: Result;

    // find by id
    if (options?.id && !options?.userId) {
      result = DATA.find((post) => post.id === options.id);
    }

    // find by userId
    if (!options?.id && options?.userId) {
      result = DATA.find((post) => post.userId === options.userId);
    }

    // find all
    if (!options) {
      result = DATA;
    }

    return result;
  },
  save: (newPost: Post, options?: Options): Result => {
    let result: Result;

    // update existing post
    if (options?.id) {
      DATA.forEach((post: Post) => {
        if (post.id === options.id) {
          post.id = newPost.id;
          post.title = newPost.title;
          post.text = newPost.text;
          post.userId = newPost.userId;
        }
      });
      result = DATA;
    }

    // add new post
    if (!options) {
      DATA.push(newPost);
      result = DATA;
    }

    return result;
  },
  remove: (options: Options): Result => {
    const { id } = options;
    let result: Result;

    // remove existing post
    if (id) {
      DATA.filter((post) => post.id === id);
      result = DATA;
    }

    return result;
  },
};
