import { createSelector } from 'reselect'
// import { UserState } from 'reducks/users/types'

const usersSelector = (state: any) => state.users
export const getUserId = createSelector([usersSelector], (state) => state.uid)
