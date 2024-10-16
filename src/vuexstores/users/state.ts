import { Post, PostsByUserId, User } from './typeinteface'
import { reactive } from 'vue'
// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
// [key: string]: any;
// }

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }
// type PostsByUserId = Map<string | number, Post[]>;
const allPostByuserId:PostsByUserId = new Map()

export interface State {
  allusers: User[];
  allPostByuserId:PostsByUserId;
  allPosts: Post[];
  userDetails: User|Object;
}

const state: State = reactive({
  allusers: [],
  allPostByuserId,
  allPosts: [],
  userDetails: {},
})

export default state
