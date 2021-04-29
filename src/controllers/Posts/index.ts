import type { NextApiRequest, NextApiResponse } from 'next';

import Posts from 'src/models/Posts';

export const create = (req: NextApiRequest, res: NextApiResponse): any => {
  const { post } = req.body;

  const result = Posts.save(post);

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

export const read = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;

  const result = Posts.find(id ? { id: parseInt(id.toString()) } : undefined);

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

export const update = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;
  const { post } = req.body;

  const result = Posts.save(post, { id: parseInt(id.toString()) });

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

export const remove = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;

  const result = Posts.remove({ id: parseInt(id.toString()) });

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};
