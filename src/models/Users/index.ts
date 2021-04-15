import { UserType } from 'src/types/User';

const DATA = [
  {
    id: 1,
    firstName: 'Jerom',
    lastName: 'Verschoote',
    emailAddress: 'jeromverschoote@gmail.com',
    imageUrl: '/assets/images/avatar.png',
  },
  {
    id: 2,
    firstName: 'Lie',
    lastName: 'Verschoote',
    emailAddress: 'lieverschoote@gmail.com',
    imageUrl: '/assets/images/avatar.png',
  },
  {
    id: 3,
    firstName: 'Thomas',
    lastName: 'Reynen',
    emailAddress: 'thomasreynen@gmail.com',
    imageUrl: '/assets/images/avatar.png',
  },
  {
    id: 4,
    firstName: 'Wannes',
    lastName: 'De Meyer',
    emailAddress: 'wannesdemeyer@gmail.com',
    imageUrl: '/assets/images/avatar.png',
  },
  {
    id: 5,
    firstName: 'Simon',
    lastName: 'Van Haeken',
    emailAddress: 'simonvanhaeken@gmail.com',
    imageUrl: '/assets/images/avatar.png',
  },
];

export default {
  findAll: (): UserType[] => DATA,
  find: (id: number): UserType | undefined =>
    DATA.find((item) => item.id === id),
};
