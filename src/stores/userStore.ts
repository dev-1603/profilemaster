import api from './data/apiList.json'
import { defineStore } from 'pinia'
import { PostsByUserId, State } from '../typedef/storeType'
import axios from 'axios'
import { useRouter } from 'vue-router'
const allPostByuserId:PostsByUserId = new Map()
export const useUserStore = defineStore('User', () => {
  const router = useRouter()
  const state = reactive<State>({
    allusers: [],
    allPostByuserId,
    allPosts: [],
    userDetails: {},
  })

  const getUsers = computed(() => state.allusers)

  const getPostsByUserId = async (id: string | number) => {
    debugger
    if (!id) {
      console.error('User Id not provided')
      router.go(-1)
      throw new Error('User Id not provided')
    }
    const posts = state.allPostByuserId.has(Number(id)) ? state.allPostByuserId.get(Number(id)) : await fetchPostForUser(Number(id))
    if (!state.userDetails?.id) {
      state.userDetails = (state.allusers && state.allusers.find((x:{[k:string]:any}) => x.id === Number(id))) ?? await axios.get(api.allUsers + `/${id}`)
      if (state.userDetails) {
        state.allusers[state.userDetails.id - 1] = state.userDetails
      }
      state.userDetails.posts = posts
    }
    return posts
  }

  const getSelectedUser = computed(() => state.userDetails)

  // actions
  const fetchUsers = async (id?:string|number) => {
    try {
      if (state.allusers?.length && !id) return state.allusers
      const users = await axios.get(api.allUsers)
      state.allusers = users.data
      // eslint-disable-next-line eqeqeq
      return id ? users.data.find((x:{[k:string]:any}) => x.id == id) : users.data
    } catch (error: any) {
      console.error('error #%d', error)
      throw new Error('Unable to fetch Users')
    }
  }

  /**
   * Fetches posts for a given user by their user ID.
   *
   * @param {number | string} userId - The ID of the user whose posts are to be fetched.
   * @returns {Promise<any>} A promise that resolves to the user's posts.
   * @throws {Error} Throws an error if the user ID is not provided or if there is an issue fetching the posts.
   */
  const fetchPostForUser = async (userId: number | string) => {
    try {
      userId = Number(userId)
      if (!userId) throw new Error('User Id not provided')
      if (state.allPostByuserId.has(userId)) return state.allPostByuserId.get(userId)
      else {
        const posts = await axios.get(api.postsForUser + userId)
        state.allPostByuserId.set(userId, posts.data)
        return posts.data
      }
    } catch (error: any) {
      console.error('error #%d', error)
      throw new Error(error?.message || 'Unable to fetch Posts')
    }
  }

  /**
   * Selects a user and fetches their posts.
   *
   * This function attempts to select a user based on the provided payload. If the payload is not provided or the user's name is not found,
   * it fetches the users. It then fetches the posts for the selected user and updates the state with the user's details and posts.
   *
   * @param {any} [payload] - The payload containing user information. If not provided or if the user's name is not found, users will be fetched.
   * @throws {Error} Throws an error if unable to select the user.
   * @returns {Promise<void>} A promise that resolves when the user is selected and their posts are fetched.
   */
  const selectUser = async (payload?: any) => {
    debugger
    try {
      console.trace('selectUser', payload)
      if (!state.allusers.length || !payload.name) {
        payload = await fetchUsers(payload.id)
      }
      const posts = await fetchPostForUser(payload.id)

      const userData = {
        ...payload,
        posts,
      }
      state.userDetails = userData
    } catch (error: any) {
      console.error('Error selecting user:', error)
      throw new Error('Unable to select user')
    }
  }

  /**
   * Clears the selected user's details by setting the `userDetails` state to an empty object.
   */
  const clearSelectedUser = () => {
    state.userDetails = {}
  }

  const fetchSinglePost = async (id:number|string, userId:number|string) => {
    try {
      if (state.allPostByuserId.has(userId)) {
        const userPosts = state.allPostByuserId.get(userId)
        return userPosts?.find(post => post.id === id) || null
      }

      const cachedPost = state.allPosts.find(post => post.id === id)
      if (cachedPost) {
        return cachedPost
      }

      const response = await axios.get(`${api.allPosts}/${id}`)
      if (!state.userDetails?.id) {
        const user = await axios.get(`${api.allUsers}/${userId}`)
        state.userDetails = { ...user.data, posts: [response.data] }
      }
      return response.data ?? {}
    } catch (error) {
      console.error('An error occurred while fetching the post:', error.message)

      return {}
    }
  }

  return {
    ...toRefs(state),
    getUsers,
    getPostsByUserId,
    fetchUsers,
    fetchPostForUser,
    selectUser,
    getSelectedUser,
    clearSelectedUser,
    fetchSinglePost,
    getters: {
      getUsers,
    },
    actions: {
      getPostsByUserId,
      fetchUsers,
      fetchPostForUser,
      selectUser,
      clearSelectedUser,
      fetchSinglePost,
    },
  }
})
