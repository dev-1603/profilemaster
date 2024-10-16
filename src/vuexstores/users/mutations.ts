// export default function() {
//   FETCHUSERS (state:any, payload:any[]) {
//     state.allUsers = payload
//   }
//   FETCHPOSTFORUSER (state:any, payload:any[], userId:number|string) {
//     if (payload.length) {
//       state.postsForUser.set(userId, payload)
//     }
//   }
//   SETUSERDATA (state:any, payload:any) {
//     state.userDetails = payload
//   }
//   return{
//     FETCHUSERS,
//     FETCHPOSTFORUSER,
//     SETUSERDATA
//   }
// }

export const FETCHUSERS = (state:any, payload:any[]) => {
  state.allUsers = payload
}
export const FETCHPOSTFORUSER = (state:any, payload:any[], userId:number|string) => {
  if (payload.length) {
    state.postsForUser.set(userId, payload)
  }
}
export const SETUSERDATA = (state:any, payload:any) => {
  state.userDetails = payload
}
