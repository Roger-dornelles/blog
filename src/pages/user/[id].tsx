import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

type DataProps = {
  data: number;
};

const userID = ({ data }: DataProps) => {
  const [userInfo, setUserInfo] = useState();
  console.log(data);
  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios({
          url: '../api/user',
          method: 'POST',
          data: { id: data },
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    user();
  }, []);

  return <></>;
};

interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getServerSideProps = async (context: { params: IParams }) => {
  try {
    const { id } = context.params;

    if (!id) {
      return {
        props: {
          redirect: {
            destination: '/users',
            permanent: false,
          },
        },
      };
    }

    return {
      props: {
        error: false,
        message: null,
        data: id,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde.',
        data: null,
      },
    };
  }
};

export default userID;
