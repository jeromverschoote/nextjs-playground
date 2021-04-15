// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { find } from 'src/controllers/Users';

export default (req: NextApiRequest, res: NextApiResponse): any =>
  find(req, res);
