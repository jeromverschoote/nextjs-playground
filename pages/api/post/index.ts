// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { create } from 'src/controllers/Posts';
import MethodEnum from 'src/enums/Method';

export default (req: NextApiRequest, res: NextApiResponse): any => {
  const { method } = req;

  if (method === MethodEnum.Post) {
    return create(req, res);
  }

  res.setHeader('Allow', [MethodEnum.Post]);
  return res.status(405).end(`Method ${method} Not Allowed`);
};
