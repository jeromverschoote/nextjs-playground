// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { find } from 'src/controllers/Users';

export default (req: NextApiRequest, res: NextApiResponse): any => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return find(req, res);
    case 'POST':
    // ...
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
