import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AcceptOrRejectFriendInput = {
  accept: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type AddUserMutationResponse = {
  __typename?: 'AddUserMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  friend?: Maybe<User>;
  me?: Maybe<User>;
};

export type Category = {
  __typename?: 'Category';
  avatar?: Maybe<Scalars['String']['output']>;
  chatUsers?: Maybe<Array<User>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type CategoryMutationResponse = {
  __typename?: 'CategoryMutationResponse';
  category?: Maybe<Category>;
  errors?: Maybe<Array<FieldError>>;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: User;
  id: Scalars['String']['output'];
  post: Post;
  updatedAt: Scalars['String']['output'];
};

export type CommentInput = {
  body: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};

export type CommentMutationResponse = {
  __typename?: 'CommentMutationResponse';
  comment?: Maybe<Comment>;
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
};

export type CreatePostInput = {
  categoryId: Scalars['String']['input'];
  categoryName: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  imageH?: InputMaybe<Scalars['Int']['input']>;
  imageW?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type EditPostInput = {
  categoryId: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  imageH?: InputMaybe<Scalars['String']['input']>;
  imageW?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type EditUserInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  category: Category;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  sentBy: User;
  updatedAt: Scalars['String']['output'];
};

export type MessageInput = {
  categoryName: Scalars['String']['input'];
  content: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFriend: AddUserMutationResponse;
  addFriendRequest: AddUserMutationResponse;
  changePassword: UserMutationResponse;
  createCategory: CategoryMutationResponse;
  createComment: CommentMutationResponse;
  createMessage: Scalars['Boolean']['output'];
  createPost: PostMutationResponse;
  deletePost: PostMutationResponse;
  editComment: CommentMutationResponse;
  editPost: PostMutationResponse;
  editUser: UserMutationResponse;
  forgotPassword: Scalars['Boolean']['output'];
  joinChatRoom: UserLeaveJoinSubResponse;
  leaveChatRoom: UserLeaveJoinSubResponse;
  login: UserMutationResponse;
  logout: UserLogoutMutationResponse;
  register: UserMutationResponse;
  sendPrivateMessage: Scalars['Boolean']['output'];
  vote: VoteMutationResponse;
};


export type MutationAddFriendArgs = {
  data: AcceptOrRejectFriendInput;
};


export type MutationAddFriendRequestArgs = {
  data: RequestToAddFriendInput;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateMessageArgs = {
  data: MessageInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationDeletePostArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationEditCommentArgs = {
  data: CommentInput;
};


export type MutationEditPostArgs = {
  data: EditPostInput;
};


export type MutationEditUserArgs = {
  data: EditUserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationJoinChatRoomArgs = {
  data: CategoryInput;
};


export type MutationLeaveChatRoomArgs = {
  data: CategoryInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationSendPrivateMessageArgs = {
  data: PrivateMessageInput;
};


export type MutationVoteArgs = {
  data: VoteInput;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  category: Category;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageH?: Maybe<Scalars['Int']['output']>;
  imageW?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  totalComments?: Maybe<_QueryMeta>;
  totalVotes?: Maybe<_QueryMeta>;
  updatedAt: Scalars['String']['output'];
  votes?: Maybe<Array<Vote>>;
};

export type PostMutationResponse = {
  __typename?: 'PostMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
};

export type PrivateMessage = {
  __typename?: 'PrivateMessage';
  body: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  sentBy: User;
  sentTo: User;
  updatedAt: Scalars['String']['output'];
};

export type PrivateMessageInput = {
  body: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  _allPostsMeta: _QueryMeta;
  _categoryPostsMeta: _QueryMeta;
  categories?: Maybe<Array<Category>>;
  category?: Maybe<Category>;
  comment: Comment;
  comments?: Maybe<Array<Comment>>;
  me?: Maybe<User>;
  messages?: Maybe<Array<Message>>;
  numberOfCategories: _QueryMeta;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  privateMessage?: Maybe<PrivateMessage>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type Query_CategoryPostsMetaArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoriesArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommentArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommentsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMessagesArgs = {
  categoryName: Scalars['String']['input'];
};


export type QueryPostArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  data: EditUserInput;
};

export type RegisterInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RequestToAddFriendInput = {
  username: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newComment: Comment;
  newMessage: Message;
  newPost: Post;
  newPrivateMessage: PrivateMessage;
  newUser: User;
};


export type SubscriptionNewCommentArgs = {
  postId: Scalars['ID']['input'];
};


export type SubscriptionNewMessageArgs = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionNewPrivateMessageArgs = {
  userId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  chatRooms: Array<Category>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  friendRequests: Array<User>;
  friends: Array<User>;
  id: Scalars['String']['output'];
  online: Scalars['Boolean']['output'];
  privateMessages: Array<PrivateMessage>;
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserLeaveJoinSubResponse = {
  __typename?: 'UserLeaveJoinSubResponse';
  category?: Maybe<Category>;
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UserLogoutMutationResponse = {
  __typename?: 'UserLogoutMutationResponse';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['String']['output']>;
};

export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Message>;
  user?: Maybe<User>;
};

export type Vote = {
  __typename?: 'Vote';
  castBy: User;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type VoteInput = {
  postId: Scalars['ID']['input'];
  value: Scalars['Int']['input'];
};

export type VoteMutationResponse = {
  __typename?: 'VoteMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
  vote?: Maybe<Vote>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count: Scalars['Int']['output'];
  score?: Maybe<Scalars['Int']['output']>;
};

export type CategoryDetailsFragment = { __typename?: 'Category', id: string, createdAt: string, updatedAt: string, name: string };

export type CommentDetailsFragment = { __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string };

export type PostDetailsFragment = { __typename?: 'Post', id: string, createdAt: string, updatedAt: string, title: string, imageH?: number | null, imageW?: number | null, text?: string | null, image?: string | null, link?: string | null };

export type UserDetailsFragment = { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean };

export type UserMeDetailsFragment = { __typename?: 'User', id: string, username: string, email: string, about?: string | null, online: boolean, avatar?: string | null };

export type CreateSubredditMutationVariables = Exact<{
  data: CategoryInput;
}>;


export type CreateSubredditMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'CategoryMutationResponse', category?: { __typename?: 'Category', id: string, createdAt: string, updatedAt: string, name: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type JoinChatRoomMutationVariables = Exact<{
  data: CategoryInput;
}>;


export type JoinChatRoomMutation = { __typename?: 'Mutation', joinChatRoom: { __typename?: 'UserLeaveJoinSubResponse', category?: { __typename?: 'Category', id: string, name: string, chatUsers?: Array<{ __typename?: 'User', id: string, username: string }> | null } | null } };

export type CreateCommentMutationVariables = Exact<{
  data: CommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CommentMutationResponse', comment?: { __typename?: 'Comment', id: string, body: string, createdBy: { __typename?: 'User', id: string, username: string }, post: { __typename?: 'Post', id: string } } | null, post?: { __typename?: 'Post', id: string, title: string, totalComments?: { __typename?: '_QueryMeta', count: number } | null, totalVotes?: { __typename?: '_QueryMeta', count: number } | null, comments?: Array<{ __typename?: 'Comment', id: string, createdBy: { __typename?: 'User', username: string } }> | null } | null } };

export type CreateMessageMutationVariables = Exact<{
  data: MessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: boolean };

export type CreatePostMutationVariables = Exact<{
  data: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'PostMutationResponse', post?: { __typename?: 'Post', id: string, createdAt: string, updatedAt: string, title: string, imageH?: number | null, imageW?: number | null, text?: string | null, image?: string | null, link?: string | null, comments?: Array<{ __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string, createdBy: { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean } }> | null, author: { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean }, category: { __typename?: 'Category', id: string, createdAt: string, updatedAt: string, name: string }, totalComments?: { __typename?: '_QueryMeta', count: number } | null, totalVotes?: { __typename?: '_QueryMeta', score?: number | null, count: number } | null } | null } };

export type DeletePostMutationVariables = Exact<{
  postId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'PostMutationResponse', post?: { __typename?: 'Post', id: string } | null } };

export type EditPostMutationVariables = Exact<{
  data: EditPostInput;
}>;


export type EditPostMutation = { __typename?: 'Mutation', editPost: { __typename?: 'PostMutationResponse', post?: { __typename?: 'Post', id: string, createdAt: string, updatedAt: string, title: string, imageH?: number | null, imageW?: number | null, text?: string | null, image?: string | null, link?: string | null, category: { __typename?: 'Category', id: string, createdAt: string, updatedAt: string, name: string } } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type AddFriendMutationVariables = Exact<{
  data: AcceptOrRejectFriendInput;
}>;


export type AddFriendMutation = { __typename?: 'Mutation', addFriend: { __typename?: 'AddUserMutationResponse', me?: { __typename?: 'User', id: string, username: string } | null, friend?: { __typename?: 'User', id: string, username: string, online: boolean } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type AddFriendRequestMutationVariables = Exact<{
  data: RequestToAddFriendInput;
}>;


export type AddFriendRequestMutation = { __typename?: 'Mutation', addFriendRequest: { __typename?: 'AddUserMutationResponse', me?: { __typename?: 'User', id: string, username: string } | null, friend?: { __typename?: 'User', id: string, username: string, online: boolean } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type EditUserMutationVariables = Exact<{
  data: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'UserMutationResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, username: string, about?: string | null, email: string, avatar?: string | null } | null } };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, username: string, online: boolean, email: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'UserLogoutMutationResponse', message?: string | null, success?: string | null } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserMutationResponse', user?: { __typename?: 'User', id: string, username: string, email: string, about?: string | null, online: boolean, avatar?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type SendPrivateMessageMutationVariables = Exact<{
  data: PrivateMessageInput;
}>;


export type SendPrivateMessageMutation = { __typename?: 'Mutation', sendPrivateMessage: boolean };

export type CreateVoteMutationVariables = Exact<{
  data: VoteInput;
}>;


export type CreateVoteMutation = { __typename?: 'Mutation', vote: { __typename?: 'VoteMutationResponse', vote?: { __typename?: 'Vote', value: number, id: string } | null, post?: { __typename?: 'Post', id: string, totalVotes?: { __typename?: '_QueryMeta', count: number, score?: number | null } | null } | null } };

export type CategoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id: string, createdAt: string, updatedAt: string, name: string }> | null };

export type CategoryQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoryQuery = { __typename?: 'Query', category?: { __typename?: 'Category', id: string, name: string, chatUsers?: Array<{ __typename?: 'User', id: string, username: string, online: boolean }> | null } | null };

export type CurrentCategoryIdQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CurrentCategoryIdQuery = { __typename?: 'Query', category?: { __typename?: 'Category', id: string, name: string } | null };

export type NumberOfCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type NumberOfCategoriesQuery = { __typename?: 'Query', numberOfCategories: { __typename?: '_QueryMeta', count: number } };

export type CommentQueryVariables = Exact<{
  postId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CommentQuery = { __typename?: 'Query', comment: { __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string, createdBy: { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean } } };

export type CommentsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string, createdBy: { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean } }> | null };

export type CommentsForPostQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
  orderBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type CommentsForPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, comments?: Array<{ __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string, createdBy: { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean } }> | null } | null };

export type ChatRoomMessagesQueryVariables = Exact<{
  categoryName: Scalars['String']['input'];
}>;


export type ChatRoomMessagesQuery = { __typename?: 'Query', messages?: Array<{ __typename?: 'Message', id: string, content: string, sentBy: { __typename?: 'User', id: string, username: string }, category: { __typename?: 'Category', id: string, name: string } }> | null };

export type PostQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, createdAt: string, updatedAt: string, title: string, imageH?: number | null, imageW?: number | null, text?: string | null, image?: string | null, link?: string | null, category: { __typename?: 'Category', id: string, createdAt: string, updatedAt: string, name: string }, author: { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean }, comments?: Array<{ __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string }> | null, totalComments?: { __typename?: '_QueryMeta', count: number } | null, totalVotes?: { __typename?: '_QueryMeta', score?: number | null, count: number } | null } | null };

export type PostsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, createdAt: string, updatedAt: string, title: string, imageH?: number | null, imageW?: number | null, text?: string | null, image?: string | null, link?: string | null, category: { __typename?: 'Category', id: string, createdAt: string, updatedAt: string, name: string }, author: { __typename?: 'User', id: string, createdAt: string, updatedAt: string, username: string, online: boolean }, comments?: Array<{ __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string }> | null, totalComments?: { __typename?: '_QueryMeta', count: number } | null, totalVotes?: { __typename?: '_QueryMeta', score?: number | null, count: number } | null }> | null, _allPostsMeta: { __typename?: '_QueryMeta', count: number }, _categoryPostsMeta: { __typename?: '_QueryMeta', count: number } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string, about?: string | null, online: boolean, avatar?: string | null } | null };

export type MyChatRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyChatRoomsQuery = { __typename?: 'Query', me?: { __typename?: 'User', chatRooms: Array<{ __typename?: 'Category', chatUsers?: Array<{ __typename?: 'User', id: string, online: boolean, username: string }> | null }> } | null };

export type MyFriendRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFriendRequestsQuery = { __typename?: 'Query', me?: { __typename?: 'User', friendRequests: Array<{ __typename?: 'User', id: string, username: string, online: boolean }> } | null };

export type MyFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFriendsQuery = { __typename?: 'Query', me?: { __typename?: 'User', friends: Array<{ __typename?: 'User', id: string, username: string, online: boolean }> } | null };

export type MyPrivateMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyPrivateMessagesQuery = { __typename?: 'Query', me?: { __typename?: 'User', privateMessages: Array<{ __typename?: 'PrivateMessage', id: string, createdAt: string, body: string, sentBy: { __typename?: 'User', id: string, avatar?: string | null, online: boolean, username: string }, sentTo: { __typename?: 'User', id: string, avatar?: string | null, online: boolean, username: string } }> } | null };

export type UserQueryVariables = Exact<{
  data: EditUserInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, username: string, email: string, about?: string | null, online: boolean } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, username: string, online: boolean, email: string, about?: string | null }> | null };

export type UpdateMetaQueryVariables = Exact<{
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateMetaQuery = { __typename?: 'Query', _allPostsMeta: { __typename?: '_QueryMeta', count: number }, _categoryPostsMeta: { __typename?: '_QueryMeta', count: number } };

export type CategoryChatSubSubscriptionVariables = Exact<{
  categoryName: Scalars['String']['input'];
}>;


export type CategoryChatSubSubscription = { __typename?: 'Subscription', newMessage: { __typename?: 'Message', id: string, content: string, sentBy: { __typename?: 'User', id: string, username: string }, category: { __typename?: 'Category', id: string, name: string } } };

export type NewUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewUserSubscription = { __typename?: 'Subscription', newUser: { __typename?: 'User', id: string, username: string, email: string } };

export type NewPrivateMessageSubscriptionVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type NewPrivateMessageSubscription = { __typename?: 'Subscription', newPrivateMessage: { __typename?: 'PrivateMessage', id: string, body: string, sentBy: { __typename?: 'User', id: string, username: string }, sentTo: { __typename?: 'User', id: string, username: string } } };

export const CategoryDetailsFragmentDoc = gql`
    fragment CategoryDetails on Category {
  id
  createdAt
  updatedAt
  name
}
    `;
export const CommentDetailsFragmentDoc = gql`
    fragment CommentDetails on Comment {
  id
  createdAt
  updatedAt
  body
}
    `;
export const PostDetailsFragmentDoc = gql`
    fragment PostDetails on Post {
  id
  createdAt
  updatedAt
  title
  imageH
  imageW
  text
  image
  link
}
    `;
export const UserDetailsFragmentDoc = gql`
    fragment UserDetails on User {
  id
  createdAt
  updatedAt
  username
  online
}
    `;
export const UserMeDetailsFragmentDoc = gql`
    fragment UserMeDetails on User {
  id
  username
  email
  about
  online
  avatar
}
    `;
export const CreateSubredditDocument = gql`
    mutation createSubreddit($data: CategoryInput!) {
  createCategory(data: $data) {
    category {
      ...CategoryDetails
    }
    errors {
      field
      message
    }
  }
}
    ${CategoryDetailsFragmentDoc}`;
export type CreateSubredditMutationFn = Apollo.MutationFunction<CreateSubredditMutation, CreateSubredditMutationVariables>;

/**
 * __useCreateSubredditMutation__
 *
 * To run a mutation, you first call `useCreateSubredditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubredditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubredditMutation, { data, loading, error }] = useCreateSubredditMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubredditMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubredditMutation, CreateSubredditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubredditMutation, CreateSubredditMutationVariables>(CreateSubredditDocument, options);
      }
export type CreateSubredditMutationHookResult = ReturnType<typeof useCreateSubredditMutation>;
export type CreateSubredditMutationResult = Apollo.MutationResult<CreateSubredditMutation>;
export type CreateSubredditMutationOptions = Apollo.BaseMutationOptions<CreateSubredditMutation, CreateSubredditMutationVariables>;
export const JoinChatRoomDocument = gql`
    mutation JoinChatRoom($data: CategoryInput!) {
  joinChatRoom(data: $data) {
    category {
      id
      name
      chatUsers {
        id
        username
      }
    }
  }
}
    `;
export type JoinChatRoomMutationFn = Apollo.MutationFunction<JoinChatRoomMutation, JoinChatRoomMutationVariables>;

/**
 * __useJoinChatRoomMutation__
 *
 * To run a mutation, you first call `useJoinChatRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinChatRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinChatRoomMutation, { data, loading, error }] = useJoinChatRoomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJoinChatRoomMutation(baseOptions?: Apollo.MutationHookOptions<JoinChatRoomMutation, JoinChatRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinChatRoomMutation, JoinChatRoomMutationVariables>(JoinChatRoomDocument, options);
      }
export type JoinChatRoomMutationHookResult = ReturnType<typeof useJoinChatRoomMutation>;
export type JoinChatRoomMutationResult = Apollo.MutationResult<JoinChatRoomMutation>;
export type JoinChatRoomMutationOptions = Apollo.BaseMutationOptions<JoinChatRoomMutation, JoinChatRoomMutationVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($data: CommentInput!) {
  createComment(data: $data) {
    comment {
      id
      body
      createdBy {
        id
        username
      }
      post {
        id
      }
    }
    post {
      id
      title
      totalComments {
        count
      }
      totalVotes {
        count
      }
      comments {
        id
        createdBy {
          username
        }
      }
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($data: MessageInput!) {
  createMessage(data: $data)
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($data: CreatePostInput!) {
  createPost(data: $data) {
    post {
      ...PostDetails
      comments {
        ...CommentDetails
        createdBy {
          ...UserDetails
        }
      }
      author {
        ...UserDetails
      }
      category {
        ...CategoryDetails
      }
      totalComments {
        count
      }
      totalVotes {
        score
        count
      }
    }
  }
}
    ${PostDetailsFragmentDoc}
${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($postId: ID) {
  deletePost(postId: $postId) {
    post {
      id
    }
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const EditPostDocument = gql`
    mutation EditPost($data: EditPostInput!) {
  editPost(data: $data) {
    post {
      ...PostDetails
      category {
        ...CategoryDetails
      }
    }
    errors {
      field
      message
    }
  }
}
    ${PostDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}`;
export type EditPostMutationFn = Apollo.MutationFunction<EditPostMutation, EditPostMutationVariables>;

/**
 * __useEditPostMutation__
 *
 * To run a mutation, you first call `useEditPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostMutation, { data, loading, error }] = useEditPostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditPostMutation(baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, options);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = Apollo.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = Apollo.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const AddFriendDocument = gql`
    mutation AddFriend($data: AcceptOrRejectFriendInput!) {
  addFriend(data: $data) {
    me {
      id
      username
    }
    friend {
      id
      username
      online
    }
    errors {
      field
      message
    }
  }
}
    `;
export type AddFriendMutationFn = Apollo.MutationFunction<AddFriendMutation, AddFriendMutationVariables>;

/**
 * __useAddFriendMutation__
 *
 * To run a mutation, you first call `useAddFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFriendMutation, { data, loading, error }] = useAddFriendMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddFriendMutation(baseOptions?: Apollo.MutationHookOptions<AddFriendMutation, AddFriendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFriendMutation, AddFriendMutationVariables>(AddFriendDocument, options);
      }
export type AddFriendMutationHookResult = ReturnType<typeof useAddFriendMutation>;
export type AddFriendMutationResult = Apollo.MutationResult<AddFriendMutation>;
export type AddFriendMutationOptions = Apollo.BaseMutationOptions<AddFriendMutation, AddFriendMutationVariables>;
export const AddFriendRequestDocument = gql`
    mutation AddFriendRequest($data: RequestToAddFriendInput!) {
  addFriendRequest(data: $data) {
    me {
      id
      username
    }
    friend {
      id
      username
      online
    }
    errors {
      field
      message
    }
  }
}
    `;
export type AddFriendRequestMutationFn = Apollo.MutationFunction<AddFriendRequestMutation, AddFriendRequestMutationVariables>;

/**
 * __useAddFriendRequestMutation__
 *
 * To run a mutation, you first call `useAddFriendRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFriendRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFriendRequestMutation, { data, loading, error }] = useAddFriendRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddFriendRequestMutation(baseOptions?: Apollo.MutationHookOptions<AddFriendRequestMutation, AddFriendRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFriendRequestMutation, AddFriendRequestMutationVariables>(AddFriendRequestDocument, options);
      }
export type AddFriendRequestMutationHookResult = ReturnType<typeof useAddFriendRequestMutation>;
export type AddFriendRequestMutationResult = Apollo.MutationResult<AddFriendRequestMutation>;
export type AddFriendRequestMutationOptions = Apollo.BaseMutationOptions<AddFriendRequestMutation, AddFriendRequestMutationVariables>;
export const EditUserDocument = gql`
    mutation editUser($data: EditUserInput!) {
  editUser(data: $data) {
    errors {
      field
      message
    }
    user {
      id
      username
      about
      email
      avatar
    }
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    errors {
      field
      message
    }
    user {
      id
      username
      online
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
    success
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    user {
      id
      username
      email
      about
      online
      avatar
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendPrivateMessageDocument = gql`
    mutation SendPrivateMessage($data: PrivateMessageInput!) {
  sendPrivateMessage(data: $data)
}
    `;
export type SendPrivateMessageMutationFn = Apollo.MutationFunction<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>;

/**
 * __useSendPrivateMessageMutation__
 *
 * To run a mutation, you first call `useSendPrivateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPrivateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPrivateMessageMutation, { data, loading, error }] = useSendPrivateMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendPrivateMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>(SendPrivateMessageDocument, options);
      }
export type SendPrivateMessageMutationHookResult = ReturnType<typeof useSendPrivateMessageMutation>;
export type SendPrivateMessageMutationResult = Apollo.MutationResult<SendPrivateMessageMutation>;
export type SendPrivateMessageMutationOptions = Apollo.BaseMutationOptions<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>;
export const CreateVoteDocument = gql`
    mutation createVote($data: VoteInput!) {
  vote(data: $data) {
    vote {
      value
      id
    }
    post {
      id
      totalVotes {
        count
        score
      }
    }
  }
}
    `;
export type CreateVoteMutationFn = Apollo.MutationFunction<CreateVoteMutation, CreateVoteMutationVariables>;

/**
 * __useCreateVoteMutation__
 *
 * To run a mutation, you first call `useCreateVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVoteMutation, { data, loading, error }] = useCreateVoteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateVoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateVoteMutation, CreateVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVoteMutation, CreateVoteMutationVariables>(CreateVoteDocument, options);
      }
export type CreateVoteMutationHookResult = ReturnType<typeof useCreateVoteMutation>;
export type CreateVoteMutationResult = Apollo.MutationResult<CreateVoteMutation>;
export type CreateVoteMutationOptions = Apollo.BaseMutationOptions<CreateVoteMutation, CreateVoteMutationVariables>;
export const CategoriesDocument = gql`
    query Categories($first: Int, $orderBy: String, $skip: Int, $name: String) {
  categories(first: $first, orderBy: $orderBy, skip: $skip, name: $name) {
    ...CategoryDetails
  }
}
    ${CategoryDetailsFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export function refetchCategoriesQuery(variables?: CategoriesQueryVariables) {
      return { query: CategoriesDocument, variables: variables }
    }
export const CategoryDocument = gql`
    query Category($name: String, $categoryId: String) {
  category(name: $name, categoryId: $categoryId) {
    id
    name
    chatUsers {
      id
      username
      online
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      name: // value for 'name'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export function refetchCategoryQuery(variables?: CategoryQueryVariables) {
      return { query: CategoryDocument, variables: variables }
    }
export const CurrentCategoryIdDocument = gql`
    query CurrentCategoryId($categoryId: String, $name: String) {
  category(categoryId: $categoryId, name: $name) {
    id
    name
  }
}
    `;

/**
 * __useCurrentCategoryIdQuery__
 *
 * To run a query within a React component, call `useCurrentCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentCategoryIdQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCurrentCategoryIdQuery(baseOptions?: Apollo.QueryHookOptions<CurrentCategoryIdQuery, CurrentCategoryIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentCategoryIdQuery, CurrentCategoryIdQueryVariables>(CurrentCategoryIdDocument, options);
      }
export function useCurrentCategoryIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentCategoryIdQuery, CurrentCategoryIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentCategoryIdQuery, CurrentCategoryIdQueryVariables>(CurrentCategoryIdDocument, options);
        }
export type CurrentCategoryIdQueryHookResult = ReturnType<typeof useCurrentCategoryIdQuery>;
export type CurrentCategoryIdLazyQueryHookResult = ReturnType<typeof useCurrentCategoryIdLazyQuery>;
export type CurrentCategoryIdQueryResult = Apollo.QueryResult<CurrentCategoryIdQuery, CurrentCategoryIdQueryVariables>;
export function refetchCurrentCategoryIdQuery(variables?: CurrentCategoryIdQueryVariables) {
      return { query: CurrentCategoryIdDocument, variables: variables }
    }
export const NumberOfCategoriesDocument = gql`
    query NumberOfCategories {
  numberOfCategories {
    count
  }
}
    `;

/**
 * __useNumberOfCategoriesQuery__
 *
 * To run a query within a React component, call `useNumberOfCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNumberOfCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNumberOfCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNumberOfCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<NumberOfCategoriesQuery, NumberOfCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NumberOfCategoriesQuery, NumberOfCategoriesQueryVariables>(NumberOfCategoriesDocument, options);
      }
export function useNumberOfCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NumberOfCategoriesQuery, NumberOfCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NumberOfCategoriesQuery, NumberOfCategoriesQueryVariables>(NumberOfCategoriesDocument, options);
        }
export type NumberOfCategoriesQueryHookResult = ReturnType<typeof useNumberOfCategoriesQuery>;
export type NumberOfCategoriesLazyQueryHookResult = ReturnType<typeof useNumberOfCategoriesLazyQuery>;
export type NumberOfCategoriesQueryResult = Apollo.QueryResult<NumberOfCategoriesQuery, NumberOfCategoriesQueryVariables>;
export function refetchNumberOfCategoriesQuery(variables?: NumberOfCategoriesQueryVariables) {
      return { query: NumberOfCategoriesDocument, variables: variables }
    }
export const CommentDocument = gql`
    query Comment($postId: ID) {
  comment(postId: $postId) {
    ...CommentDetails
    createdBy {
      ...UserDetails
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useCommentQuery__
 *
 * To run a query within a React component, call `useCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentQuery(baseOptions?: Apollo.QueryHookOptions<CommentQuery, CommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
      }
export function useCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentQuery, CommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
        }
export type CommentQueryHookResult = ReturnType<typeof useCommentQuery>;
export type CommentLazyQueryHookResult = ReturnType<typeof useCommentLazyQuery>;
export type CommentQueryResult = Apollo.QueryResult<CommentQuery, CommentQueryVariables>;
export function refetchCommentQuery(variables?: CommentQueryVariables) {
      return { query: CommentDocument, variables: variables }
    }
export const CommentsDocument = gql`
    query Comments($first: Int, $orderBy: String, $skip: Int, $postId: ID) {
  comments(first: $first, orderBy: $orderBy, skip: $skip, postId: $postId) {
    ...CommentDetails
    createdBy {
      ...UserDetails
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions?: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export function refetchCommentsQuery(variables?: CommentsQueryVariables) {
      return { query: CommentsDocument, variables: variables }
    }
export const CommentsForPostDocument = gql`
    query CommentsForPost($postId: ID!, $orderBy: String) {
  post(postId: $postId, orderBy: $orderBy) {
    id
    comments {
      ...CommentDetails
      createdBy {
        ...UserDetails
      }
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useCommentsForPostQuery__
 *
 * To run a query within a React component, call `useCommentsForPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsForPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsForPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCommentsForPostQuery(baseOptions: Apollo.QueryHookOptions<CommentsForPostQuery, CommentsForPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsForPostQuery, CommentsForPostQueryVariables>(CommentsForPostDocument, options);
      }
export function useCommentsForPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsForPostQuery, CommentsForPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsForPostQuery, CommentsForPostQueryVariables>(CommentsForPostDocument, options);
        }
export type CommentsForPostQueryHookResult = ReturnType<typeof useCommentsForPostQuery>;
export type CommentsForPostLazyQueryHookResult = ReturnType<typeof useCommentsForPostLazyQuery>;
export type CommentsForPostQueryResult = Apollo.QueryResult<CommentsForPostQuery, CommentsForPostQueryVariables>;
export function refetchCommentsForPostQuery(variables: CommentsForPostQueryVariables) {
      return { query: CommentsForPostDocument, variables: variables }
    }
export const ChatRoomMessagesDocument = gql`
    query ChatRoomMessages($categoryName: String!) {
  messages(categoryName: $categoryName) {
    id
    content
    sentBy {
      id
      username
    }
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useChatRoomMessagesQuery__
 *
 * To run a query within a React component, call `useChatRoomMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomMessagesQuery({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useChatRoomMessagesQuery(baseOptions: Apollo.QueryHookOptions<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>(ChatRoomMessagesDocument, options);
      }
export function useChatRoomMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>(ChatRoomMessagesDocument, options);
        }
export type ChatRoomMessagesQueryHookResult = ReturnType<typeof useChatRoomMessagesQuery>;
export type ChatRoomMessagesLazyQueryHookResult = ReturnType<typeof useChatRoomMessagesLazyQuery>;
export type ChatRoomMessagesQueryResult = Apollo.QueryResult<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>;
export function refetchChatRoomMessagesQuery(variables: ChatRoomMessagesQueryVariables) {
      return { query: ChatRoomMessagesDocument, variables: variables }
    }
export const PostDocument = gql`
    query Post($postId: ID!) {
  post(postId: $postId) {
    ...PostDetails
    category {
      ...CategoryDetails
    }
    author {
      ...UserDetails
    }
    comments {
      ...CommentDetails
    }
    totalComments {
      count
    }
    totalVotes {
      score
      count
    }
  }
}
    ${PostDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CommentDetailsFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export function refetchPostQuery(variables: PostQueryVariables) {
      return { query: PostDocument, variables: variables }
    }
export const PostsDocument = gql`
    query Posts($first: Int, $orderBy: String, $skip: Int, $category: String) {
  posts(first: $first, orderBy: $orderBy, skip: $skip, category: $category) {
    ...PostDetails
    category {
      ...CategoryDetails
    }
    author {
      ...UserDetails
    }
    comments {
      ...CommentDetails
    }
    totalComments {
      count
    }
    totalVotes {
      score
      count
    }
  }
  _allPostsMeta {
    count
  }
  _categoryPostsMeta(name: $category) {
    count
  }
}
    ${PostDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CommentDetailsFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      category: // value for 'category'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export function refetchPostsQuery(variables?: PostsQueryVariables) {
      return { query: PostsDocument, variables: variables }
    }
export const MeDocument = gql`
    query Me {
  me {
    ...UserMeDetails
  }
}
    ${UserMeDetailsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const MyChatRoomsDocument = gql`
    query MyChatRooms {
  me {
    chatRooms {
      chatUsers {
        id
        online
        username
      }
    }
  }
}
    `;

/**
 * __useMyChatRoomsQuery__
 *
 * To run a query within a React component, call `useMyChatRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyChatRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyChatRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyChatRoomsQuery(baseOptions?: Apollo.QueryHookOptions<MyChatRoomsQuery, MyChatRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyChatRoomsQuery, MyChatRoomsQueryVariables>(MyChatRoomsDocument, options);
      }
export function useMyChatRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyChatRoomsQuery, MyChatRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyChatRoomsQuery, MyChatRoomsQueryVariables>(MyChatRoomsDocument, options);
        }
export type MyChatRoomsQueryHookResult = ReturnType<typeof useMyChatRoomsQuery>;
export type MyChatRoomsLazyQueryHookResult = ReturnType<typeof useMyChatRoomsLazyQuery>;
export type MyChatRoomsQueryResult = Apollo.QueryResult<MyChatRoomsQuery, MyChatRoomsQueryVariables>;
export function refetchMyChatRoomsQuery(variables?: MyChatRoomsQueryVariables) {
      return { query: MyChatRoomsDocument, variables: variables }
    }
export const MyFriendRequestsDocument = gql`
    query MyFriendRequests {
  me {
    friendRequests {
      id
      username
      online
    }
  }
}
    `;

/**
 * __useMyFriendRequestsQuery__
 *
 * To run a query within a React component, call `useMyFriendRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFriendRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFriendRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFriendRequestsQuery(baseOptions?: Apollo.QueryHookOptions<MyFriendRequestsQuery, MyFriendRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyFriendRequestsQuery, MyFriendRequestsQueryVariables>(MyFriendRequestsDocument, options);
      }
export function useMyFriendRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyFriendRequestsQuery, MyFriendRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyFriendRequestsQuery, MyFriendRequestsQueryVariables>(MyFriendRequestsDocument, options);
        }
export type MyFriendRequestsQueryHookResult = ReturnType<typeof useMyFriendRequestsQuery>;
export type MyFriendRequestsLazyQueryHookResult = ReturnType<typeof useMyFriendRequestsLazyQuery>;
export type MyFriendRequestsQueryResult = Apollo.QueryResult<MyFriendRequestsQuery, MyFriendRequestsQueryVariables>;
export function refetchMyFriendRequestsQuery(variables?: MyFriendRequestsQueryVariables) {
      return { query: MyFriendRequestsDocument, variables: variables }
    }
export const MyFriendsDocument = gql`
    query MyFriends {
  me {
    friends {
      id
      username
      online
    }
  }
}
    `;

/**
 * __useMyFriendsQuery__
 *
 * To run a query within a React component, call `useMyFriendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFriendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFriendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFriendsQuery(baseOptions?: Apollo.QueryHookOptions<MyFriendsQuery, MyFriendsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyFriendsQuery, MyFriendsQueryVariables>(MyFriendsDocument, options);
      }
export function useMyFriendsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyFriendsQuery, MyFriendsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyFriendsQuery, MyFriendsQueryVariables>(MyFriendsDocument, options);
        }
export type MyFriendsQueryHookResult = ReturnType<typeof useMyFriendsQuery>;
export type MyFriendsLazyQueryHookResult = ReturnType<typeof useMyFriendsLazyQuery>;
export type MyFriendsQueryResult = Apollo.QueryResult<MyFriendsQuery, MyFriendsQueryVariables>;
export function refetchMyFriendsQuery(variables?: MyFriendsQueryVariables) {
      return { query: MyFriendsDocument, variables: variables }
    }
export const MyPrivateMessagesDocument = gql`
    query MyPrivateMessages {
  me {
    privateMessages {
      id
      createdAt
      body
      sentBy {
        id
        avatar
        online
        username
      }
      sentTo {
        id
        avatar
        online
        username
      }
    }
  }
}
    `;

/**
 * __useMyPrivateMessagesQuery__
 *
 * To run a query within a React component, call `useMyPrivateMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPrivateMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPrivateMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPrivateMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>(MyPrivateMessagesDocument, options);
      }
export function useMyPrivateMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>(MyPrivateMessagesDocument, options);
        }
export type MyPrivateMessagesQueryHookResult = ReturnType<typeof useMyPrivateMessagesQuery>;
export type MyPrivateMessagesLazyQueryHookResult = ReturnType<typeof useMyPrivateMessagesLazyQuery>;
export type MyPrivateMessagesQueryResult = Apollo.QueryResult<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>;
export function refetchMyPrivateMessagesQuery(variables?: MyPrivateMessagesQueryVariables) {
      return { query: MyPrivateMessagesDocument, variables: variables }
    }
export const UserDocument = gql`
    query User($data: EditUserInput!) {
  user(data: $data) {
    id
    username
    email
    about
    online
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables: UserQueryVariables) {
      return { query: UserDocument, variables: variables }
    }
export const UsersDocument = gql`
    query Users {
  users {
    id
    username
    online
    email
    about
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export function refetchUsersQuery(variables?: UsersQueryVariables) {
      return { query: UsersDocument, variables: variables }
    }
export const UpdateMetaDocument = gql`
    query UpdateMeta($category: String) {
  _allPostsMeta {
    count
  }
  _categoryPostsMeta(name: $category) {
    count
  }
}
    `;

/**
 * __useUpdateMetaQuery__
 *
 * To run a query within a React component, call `useUpdateMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpdateMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateMetaQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useUpdateMetaQuery(baseOptions?: Apollo.QueryHookOptions<UpdateMetaQuery, UpdateMetaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpdateMetaQuery, UpdateMetaQueryVariables>(UpdateMetaDocument, options);
      }
export function useUpdateMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpdateMetaQuery, UpdateMetaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpdateMetaQuery, UpdateMetaQueryVariables>(UpdateMetaDocument, options);
        }
export type UpdateMetaQueryHookResult = ReturnType<typeof useUpdateMetaQuery>;
export type UpdateMetaLazyQueryHookResult = ReturnType<typeof useUpdateMetaLazyQuery>;
export type UpdateMetaQueryResult = Apollo.QueryResult<UpdateMetaQuery, UpdateMetaQueryVariables>;
export function refetchUpdateMetaQuery(variables?: UpdateMetaQueryVariables) {
      return { query: UpdateMetaDocument, variables: variables }
    }
export const CategoryChatSubDocument = gql`
    subscription CategoryChatSub($categoryName: String!) {
  newMessage(categoryName: $categoryName) {
    id
    content
    sentBy {
      id
      username
    }
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useCategoryChatSubSubscription__
 *
 * To run a query within a React component, call `useCategoryChatSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCategoryChatSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryChatSubSubscription({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useCategoryChatSubSubscription(baseOptions: Apollo.SubscriptionHookOptions<CategoryChatSubSubscription, CategoryChatSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CategoryChatSubSubscription, CategoryChatSubSubscriptionVariables>(CategoryChatSubDocument, options);
      }
export type CategoryChatSubSubscriptionHookResult = ReturnType<typeof useCategoryChatSubSubscription>;
export type CategoryChatSubSubscriptionResult = Apollo.SubscriptionResult<CategoryChatSubSubscription>;
export const NewUserDocument = gql`
    subscription NewUser {
  newUser {
    id
    username
    email
  }
}
    `;

/**
 * __useNewUserSubscription__
 *
 * To run a query within a React component, call `useNewUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewUserSubscription, NewUserSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewUserSubscription, NewUserSubscriptionVariables>(NewUserDocument, options);
      }
export type NewUserSubscriptionHookResult = ReturnType<typeof useNewUserSubscription>;
export type NewUserSubscriptionResult = Apollo.SubscriptionResult<NewUserSubscription>;
export const NewPrivateMessageDocument = gql`
    subscription NewPrivateMessage($userId: ID!) {
  newPrivateMessage(userId: $userId) {
    id
    body
    sentBy {
      id
      username
    }
    sentTo {
      id
      username
    }
  }
}
    `;

/**
 * __useNewPrivateMessageSubscription__
 *
 * To run a query within a React component, call `useNewPrivateMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewPrivateMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewPrivateMessageSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useNewPrivateMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<NewPrivateMessageSubscription, NewPrivateMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewPrivateMessageSubscription, NewPrivateMessageSubscriptionVariables>(NewPrivateMessageDocument, options);
      }
export type NewPrivateMessageSubscriptionHookResult = ReturnType<typeof useNewPrivateMessageSubscription>;
export type NewPrivateMessageSubscriptionResult = Apollo.SubscriptionResult<NewPrivateMessageSubscription>;