import axios from 'axios'
import api from '../data/apiList.json'

export const fetchUsers = async ({ commit, state }: any) => {
  try {
    if (state.allusers?.length) return state.allusers
    const users = await axios.get(api.allUsers)
    commit('FETCHUSERS', users.data)
    return users.data
  } catch (error: any) {
    console.error('error #%d', error)
    throw new Error('Unable to fetch Users')
  }
}
export const fetchPostForUser = async ({ commit, state }: any, userId:number|string) => {
  try {
    if (!userId) throw new Error('User Id not provided')
    if (userId && state.allPostByuserId.has(userId)) return state.allPostByuserId.get(userId)
    else {
      const posts = await axios.get(api.postsForUser + userId)
      commit('FETCHPOSTFORUSER', posts.data, userId)
      return posts.data
    }
  } catch (error: any) {
    console.error('error #%d', error)
    throw new Error(error?.message || 'Unable to fetch Posts')
  }
}

export const selectUser = async ({ commit, state }: any, payload: any) => {
  const posts = fetchPostForUser({ commit, state }, payload.userId)

  const userData = {
    ...payload,
    posts,
  }
  commit('SETUSERDATA', userData)
}

export default {
  fetchPostForUser,
  selectUser,
  fetchUsers,
}
