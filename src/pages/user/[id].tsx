import { UserInfo } from '@/types/user';
import axios from 'axios';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import * as styles from './styles';

type DataProps = {
  data: number;
};

type ResponseType = {
  data: {
    error: boolean;
    message: string | null;
    data: UserInfo | null;
  };
};

const userID = ({ data }: DataProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>();
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const user = async () => {
      try {
        const response: ResponseType = await axios({
          url: '../api/user',
          method: 'POST',
          data: { id: data },
        });

        if (response.data.error) {
          return setError(response.data?.message);
        }
        response && setUserInfo(response.data.data);
      } catch (error) {
        return setError('Ocorreu um erro, tente mais tarde.');
      }
    };

    user();
  }, []);

  return (
    <styles.Container>
      <styles.Link >
        <BsArrowLeft />
        <Link data-cy="exit" href={'/users'}>Voltar</Link>
      </styles.Link>
      <styles.InfoContainer>
        {userInfo && (
          <>
            <styles.InfoUser>
              <strong data-cy='strong'>Responsável</strong>
              <p>Nome: {userInfo?.name}</p>
              <p>Apelido: {userInfo?.username}</p>
              <p data-cy='contact'>Contato: {userInfo?.phone}</p>
              <p>Email: {userInfo?.email}</p>
            </styles.InfoUser>

            <styles.InfoUser>
              <strong>Empresa</strong>
              <p>Nome: {userInfo?.company.name}</p>
              <p>Serviço: {userInfo?.company.bs}</p>
              <p> {userInfo?.company.catchPhrase}</p>
            </styles.InfoUser>

            <styles.InfoUser>
              <strong data-cy='location'>Localização</strong>
              <p>Cidade: {userInfo?.address.city}</p>
              <p>Rua: {userInfo?.address.street}</p>
              <p> {userInfo?.address.suite}</p>
              <p>CEP: {userInfo?.address.zipcode}</p>
            </styles.InfoUser>
          </>
        )}
      </styles.InfoContainer>
      {error && <styles.Error>{error}</styles.Error>}
    </styles.Container>
  );
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
