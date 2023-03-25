import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import * as styles from './styles';

type ChildrenType = {
  children: ReactElement;
};

const data = [
  { label: 'Home', path: '/' },
  { label: 'Posts', path: '/posts' },
  { label: 'Empresas', path: '/users' },
];

export const Layout = ({ children }: ChildrenType) => {
  const router = useRouter();

  return (
    <>
      <styles.Container>
        <styles.Header>
          <ul>
            {data &&
              data.map((item, index) => {
                return (
                  <li key={index}>
                    {router.pathname === item.path ? (
                      <styles.LinkActive>
                        <Link href={item.path}>{item.label}</Link>
                      </styles.LinkActive>
                    ) : (
                      <Link href={item.path}>{item.label}</Link>
                    )}
                  </li>
                );
              })}
          </ul>
        </styles.Header>
      </styles.Container>
      <section>{children}</section>
    </>
  );
};
