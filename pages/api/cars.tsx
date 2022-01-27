import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<{ status: string; data: {} }>
) => {
  const filePath = path.join(process.cwd(), 'public', 'api', 'cars.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

  if (req.method === 'GET') {
    res.status(200).json({
      status: 'success',
      data,
    });
  }
};

export default handler;
