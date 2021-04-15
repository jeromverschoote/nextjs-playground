import type { NextApiRequest, NextApiResponse } from 'next';

import Posts from 'src/models/Posts';

export const findAll = (_req: NextApiRequest, res: NextApiResponse): any => {
  const result = Posts.findAll();

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

export const find = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;

  const result = Posts.find(parseInt(id.toString()));

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};
