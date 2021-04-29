import type { NextApiRequest, NextApiResponse } from 'next';

import Users from 'src/models/Users';

export const create = (req: NextApiRequest, res: NextApiResponse): any => {
  const { user } = req.body;

  const result = Users.save(user);

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

export const read = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;

  const result = Users.find(id ? { id: parseInt(id.toString()) } : undefined);

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

export const update = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;
  const { user } = req.body;

  const result = Users.save(user, { id: parseInt(id.toString()) });

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};

export const remove = (req: NextApiRequest, res: NextApiResponse): any => {
  const { id } = req.query;

  const result = Users.remove({ id: parseInt(id.toString()) });

  if (result) {
    return res.status(200).json(result);
  }

  res.status(500).json({
    message: 'Something went wrong.',
  });
};
