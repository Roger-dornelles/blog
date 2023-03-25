import { usersService } from '@/services/usersService';
import { NextApiRequest, NextApiResponse } from 'next';

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await usersService();

    if (users.error) {
      return res.status(404).json({
        error: true,
        message: users.message,
        data: null,
      });
    }

    return res.status(200).json({
      error: false,
      message: null,
      data: users.data,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    });
  }
};
export default users;
