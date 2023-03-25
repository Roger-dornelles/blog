import { UsersType } from '@/types/user';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as styles from './styles';

const users = () => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const usersAll = async () => {
      try {
        const response = await axios({
          url: '../api/users',
          method: 'GET',
        });

        if (response.data.error) {
          setError(response.data.message);
        }
        setUsers(response.data.data);
      } catch (error) {
        setError('Ocorreu um erro, tente mais tarde.');
      }
    };
    usersAll();
  }, []);

  return (
    <styles.Container>
      <styles.H2 data-cy="h2">Empresas parceiras do Bloguinho.</styles.H2>

      <styles.UsersContainer data-cy="container">
        <styles.Ul>
          {users &&
            users.map((item) => {
              return (
                <styles.Li key={item.id}>
                  <styles.User>
                    <Link href={`/user/${item.id}`} data-cy={item.id}>
                      <p>Nome: {item.name}</p>
                      <p>Apelido: {item.username}</p>
                      <p data-cy="contact">Contato: {item.phone}</p>
                      <p>WebSite: {item.website}</p>
                    </Link>
                  </styles.User>
                </styles.Li>
              );
            })}
        </styles.Ul>
      </styles.UsersContainer>

      {error && <styles.Error>{error}</styles.Error>}
    </styles.Container>
  );
};

export default users;
