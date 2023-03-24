export type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ResponsePropsType = {
  error: boolean;
  message: string | null;
  data: null | DataType;
};

export type CommentsType = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
  map: (item: any) => any;
};
