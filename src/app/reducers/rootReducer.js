import {combineReducers} from 'redux'
import {reducer as FormReducer} from 'redux-form'
import userReducer from '../../features/user/userReducer'
import modalsReducer from '../../features/modals/modalReducer'
import asyncReducer from '../../features/async/asyncReducer'

const rootReducer = combineReducers({
  users: userReducer,
  form: FormReducer,
  modals: modalsReducer,
  async: asyncReducer,
})

export default rootReducer
