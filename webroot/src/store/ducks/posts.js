import { createActions, createReducer } from 'reduxsauce'
import api from '../../services/api'

export const { Types, Creators } = createActions({
  fetch: [],
  store: ['data']
})

const INITIAL_STATE = { posts: [] }

const fetch = async (state = INITIAL_STATE) => {
  const { data } = await api.get('/posts')
  return { ...state, posts: data }
}

const store = async (state = INITIAL_STATE, { data }) => {
  console.log(data)
}

export default createReducer(INITIAL_STATE, {
  [Types.FETCH]: fetch,
  [Types.STORE]: store
})
