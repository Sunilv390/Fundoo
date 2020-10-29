import NoteReducer from '../reducers/NoteReducer'
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'

const store = createStore(NoteReducer,applyMiddleware(logger));

export default store;