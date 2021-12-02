// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    apple: '🍎',
    orange: '🍊',
    banana: '🍌',
    melon: '🍈',
    watermelon: '🍉',
  });
};

export default handler;
