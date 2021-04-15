export type PostType = {
  id: number;
  title: string;
  text: string;
  date: string;
  author: {
    id: number;
    name: string;
  };
};
