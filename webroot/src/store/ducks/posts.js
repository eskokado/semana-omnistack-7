import { createActions, createReducer } from 'reduxsauce'
import api from '../../services/api'

export const { Types, Creators } = createActions({
  fetch: []
})

const INITIAL_STATE = { posts: [] }

const fetch = async (state = INITIAL_STATE) => {
  const { data } = await api.get('/posts')
  return { ...state, posts: data }
}

export default createReducer(INITIAL_STATE, {
  [Types.FETCH]: fetch
})
