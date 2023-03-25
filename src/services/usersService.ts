import axiosClient from '@/config/axios';

export const usersService = async () => {
  try {
    const users = await axiosClient({
      url: '/users',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!users.data) {
      return {
        error: true,
        message: 'Não há usuários',
        data: null,
      };
    }

    return {
      error: false,
      message: null,
      data: users.data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    };
  }
};
