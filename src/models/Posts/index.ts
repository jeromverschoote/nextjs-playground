import { PostType } from 'src/types/Post';

const DATA = [
  {
    id: 1,
    title: 'Hello Next.js!',
    text: 'Today I build my first Next App!',
    date: '',
    authorId: 1,
  },
  {
    id: 2,
    title: 'Wolla!',
    text: 'Today I build my first Next App!',
    date: '',
    authorId: 2,
  },
  {
    id: 3,
    title: 'Hello Next.js!',
    text: 'Today I build my first Next App!',
    date: '',
    authorId: 3,
  },
  {
    id: 4,
    title: 'Hello Next.js!',
    text: 'Today I build my first Next App!',
    date: '',
    authorId: 4,
  },
  {
    id: 5,
    title: 'Hello Next.js!',
    text: 'Today I build my first Next App!',
    date: '',
    authorId: 5,
  },
];

export default {
  findAll: (): PostType[] => DATA,
  find: (id: number): PostType | undefined =>
    DATA.find((item) => item.id === id),
};
