// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { read, update, remove } from 'src/controllers/Users';
import MethodEnum from 'src/enums/Method';

export default (req: NextApiRequest, res: NextApiResponse): any => {
  const { method } = req;

  if (method === MethodEnum.Get) {
    return read(req, res);
  }

  if (method === MethodEnum.Patch) {
    return update(req, res);
  }

  if (method === MethodEnum.Delete) {
    return remove(req, res);
  }

  res.setHeader('Allow', [MethodEnum.Get, MethodEnum.Patch, MethodEnum.Delete]);
  return res.status(405).end(`Method ${method} Not Allowed`);
};
