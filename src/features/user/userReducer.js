import {createReducer} from '../../app/common/util/reducerUtil'
import {CREATE_USER, DELETE_USER, UPDATE_USER, FETCH_USERS} from './userConstants'


const initialState = []

export const createUser = (state, payload) => {
  return [...state, Object.assign({}, payload.user)]
}

export const updateUser = (state, payload) => {
  return [
    ...state.filter(user => user.id !== payload.user.id),
    Object.assign({}, payload.user),
  ]
}

export const deleteUser = (state, payload) => {
  return [
    ...state.filter(user => user.id !== payload.userId),
  ]
}

export const fetchUsers = (state, payload) => {
  return payload.users
}

export default createReducer(initialState, {
  [CREATE_USER]: createUser,
  [UPDATE_USER]: updateUser,
  [DELETE_USER]: deleteUser,
  [FETCH_USERS]: fetchUsers,
})
