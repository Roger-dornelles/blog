import * as Styles from './styles';
import axios from 'axios';
import { DataType, ResponsePropsType } from '@/types/postsAll';
import { useState } from 'react';
import Head from '@/components/Header';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Pagination } from '@/components/Pagination';

const Posts = ({ error, message, data }: ResponsePropsType) => {
  const [posts] = useState(data as DataType[] | null);
  const [itemsPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pages = posts && Math.ceil(posts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = posts && posts.slice(startIndex, endIndex);

  const handlePagination = (value: number) => {
    setCurrentPage(value);
  };
  return (
    <>
      <Head />

      <Styles.H1>Bloguinho</Styles.H1>
      <Styles.Paragraph>Noticias do dia</Styles.Paragraph>
      <Styles.Container>
        {posts &&
          currentItems?.map((posts: DataType) => {
            return (
              <Styles.Post key={posts.id}>
                <Link href={`postId/${posts.id}`} data-cy={posts.id}>
                  <p>{posts?.title}</p>
                  <p>{posts?.body}</p>
                </Link>
              </Styles.Post>
            );
          })}

        {error && <Styles.Error>{message}</Styles.Error>}
      </Styles.Container>

      {!error && <Pagination currentPage={currentPage} handlePagination={handlePagination} pages={pages} />}
    </>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const posts = await axios({
      url: `${process.env.NEXT_PUBLIC_URL}/posts`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!posts.data) {
      return {
        props: {
          error: true,
          message: 'Não há posts para exibir',
          data: null,
        },
      };
    }

    return {
      props: {
        error: false,
        message: null,
        data: posts.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde',
        data: null,
      },
    };
  }
};
