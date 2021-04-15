// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { findAll } from 'src/controllers/Posts';

export default (req: NextApiRequest, res: NextApiResponse): any =>
  findAll(req, res);
