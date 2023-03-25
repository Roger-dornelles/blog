import axiosClient from '@/config/axios';

export const userService = async (id: any) => {
  try {
    const user = await axiosClient({
      url: `/users/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!user.data) {
      return {
        error: true,
        message: 'Não há usuário',
        data: null,
      };
    }

    return {
      error: false,
      message: null,
      data: user.data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde.',
      data: null,
    };
  }
};
