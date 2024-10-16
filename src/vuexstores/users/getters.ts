import { State } from './state'
export const getUsers = (state:State) => {
  return state.allusers
}
export const getPostsByUSerId = (state:State) => {
  return (id:string|number) => {
    return state.allPostByuserId.get(id)
  }
}

export default {
  getUsers,
  getPostsByUSerId,
}
