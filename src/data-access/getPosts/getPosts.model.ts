type UserType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type RawResponseType = Array<UserType>;

type PostsByUsersType = {
  userId: string;
  posts: Array<UserType>;
};

export type FormattedResponseType = {
  postsByUsers: Array<PostsByUsersType>;
};
