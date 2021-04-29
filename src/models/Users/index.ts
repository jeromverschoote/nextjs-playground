import { UserType as User } from 'src/types/User';

interface Options {
  id?: number;
}

type Result = undefined | User | User[];

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
  find: (options?: Options): Result => {
    let result: Result;

    // find by id
    if (options?.id) {
      result = DATA.find((post) => post.id === options.id);
    }

    // find all
    if (!options) {
      result = DATA;
    }

    return result;
  },
  save: (newUser: User, options?: Options): Result => {
    let result: Result;

    // update existing post
    if (options?.id) {
      DATA.forEach((user: User) => {
        if (user.id === options.id) {
          user.id = newUser.id;
          user.firstName = newUser.firstName;
          user.lastName = newUser.lastName;
          user.emailAddress = newUser.emailAddress;
          user.imageUrl = newUser.imageUrl;
        }
      });
      result = DATA;
    }

    // add new post
    if (!options) {
      DATA.push(newUser);
      result = DATA;
    }

    return result;
  },
  remove: (options: Options): Result => {
    const { id } = options;
    let result: Result;

    // remove existing post
    if (id) {
      DATA.forEach((user, index) => {
        if (user.id === id) {
          DATA.splice(index, 1);
        }
      });
      result = DATA;
    }

    return result;
  },
};
