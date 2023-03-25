import { userService } from '@/services/userService';
import { NextApiRequest, NextApiResponse } from 'next';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.body;
    
    const user = await userService(id);

    if (user.error) {
      return res.status(404).json({
        error: true,
        message: user.message,
        data: null,
      });
    }

    return res.status(200).json({
      error: false,
      message: null,
      data: user.data,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    });
  }
};
export default user;
