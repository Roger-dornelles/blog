import { CommentsType, DataType } from '@/types/postsAll';
import axios from 'axios';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import * as styles from './styles';
import Avatar from '@mui/material/Avatar';
import { BsArrowLeft } from 'react-icons/bs';

type PostIDType = {
  error: boolean;
  message: string | null;
  data: {
    post: DataType;
    comments: CommentsType | CommentsType[];
  } | null;
};

const postID = ({ error, message, data }: PostIDType) => {
  const [post] = useState<DataType | null>(data && data?.post);
  const [comments] = useState<CommentsType[] | CommentsType | null>(data && data.comments);

  return (
    <styles.Container>
      <styles.Link>
        <BsArrowLeft />
        <Link href={'/posts'} data-cy='link'>Voltar</Link>
      </styles.Link>
      <styles.H2>Bloguinho</styles.H2>

      {post && (
        <styles.Post data-cy='title'>
          <styles.PostTitle>{post.title}</styles.PostTitle>
          <styles.PostBody>{post.body}</styles.PostBody>
        </styles.Post>
      )}

      <styles.H2 data-cy='h2'>Comentários</styles.H2>
      <styles.CommentsContainer>
        {comments &&
          comments.map((item: CommentsType) => {
            return (
              <styles.Comments key={item.id}>
                <styles.Div>
                  <Avatar src="" sx={{ width: 25, height: 25 }} />
                  <styles.Span>{item.name}</styles.Span>
                </styles.Div>

                <styles.Paragraphs>{item.body}</styles.Paragraphs>
              </styles.Comments>
            );
          })}
      </styles.CommentsContainer>
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
            destination: '/',
            permanent: false,
          },
        },
      };
    }

    const post = await axios({
      url: `${process.env.NEXT_PUBLIC_URL}/posts/${id}`,
      method: 'GET',
    });

    const comments = await axios({
      url: `${process.env.NEXT_PUBLIC_URL}/posts/${id}/comments`,
      method: 'GET',
    });

    if (!post.data || !comments.data) {
      return {
        props: {
          error: true,
          message: 'Não há Post para exibir e/ou comentário sobre o post ',
          data: null,
        },
      };
    }

    return {
      props: {
        error: false,
        message: null,
        data: {
          post: post.data,
          comments: comments.data,
        },
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

export default postID;
