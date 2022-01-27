import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllData } from '../../helpers/api-util';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<{ status: string; data: {} }>
) => {
  const data = getAllData();

  if (req.method === 'GET') {
    res.status(200).json({
      status: 'success',
      data,
    });
  }
};

export default handler;
