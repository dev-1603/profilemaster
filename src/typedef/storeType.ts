export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
[key: string]: any;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  author?: string| number;
}
export type PostsByUserId = Map<string | number, Post[]>;

export interface State {
  allusers: User[];
  allPostByuserId:PostsByUserId;
  allPosts: Post[];
  userDetails: User| {[k:string]:any};
}
