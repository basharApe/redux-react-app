import {CREATE_USER, DELETE_USER, UPDATE_USER, FETCH_USERS} from './userConstants'
import {asyncActionStart, asyncActionFinish, asyncActionError} from '../async/asyncActions'
import {fetchSampleData} from '../../app/data/mockAPI'

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  }
}

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    payload: {
      user,
    },
  }
}

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: {
      user,
    },
  }
}

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: {
      userId,
    },
  }
}

export const loadUsers = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let users = await fetchSampleData()
      dispatch(fetchUsers(users))
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  }
}
