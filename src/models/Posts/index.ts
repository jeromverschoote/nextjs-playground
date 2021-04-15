import { PostType } from 'src/types/Post';

const DATA = [
  {
    id: 1,
    title: 'Hello Next.js!',
    text:
      'Today I build my first Next App. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    author: {
      id: 1,
      name: 'Jerom Verschoote',
    },
  },
  {
    id: 2,
    title: 'Hello Flower!',
    text:
      'Today I picked my first flower. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    author: {
      id: 2,
      name: 'Lie Verschoote',
    },
  },
  {
    id: 3,
    title: 'Hello Pokemon!',
    text:
      'Today I caught my first Pokemon. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    author: {
      id: 3,
      name: 'Thomas Reynen',
    },
  },
  {
    id: 4,
    title: 'Hello Smartphone!',
    text:
      'Today I repaired my first smartphone. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    author: {
      id: 4,
      name: 'Wannes De Meyer',
    },
  },
  {
    id: 5,
    title: 'Hello Bitcoin!',
    text:
      'Today I bought my first Bitcoin. Halvah jujubes brownie cupcake sugar plum cookie caramels sweet roll donut. Gummi bears tiramisu wafer marzipan powder carrot cake wafer bear claw lemon drops. Brownie tart jelly danish dragée pudding sesame snaps carrot cake. Carrot cake caramels tart.',
    date: '',
    author: {
      id: 5,
      name: 'Simon Van Haeken',
    },
  },
];

export default {
  findAll: (): PostType[] => DATA,
  find: (id: number): PostType | undefined =>
    DATA.find((item) => item.id === id),
};
