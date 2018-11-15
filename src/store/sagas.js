import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('/list.json')
    const data = res.data
    const action = initListAction(data)
    yield put(action)
  } catch(e) {
    console.log('network error')
  }
}

function* TodoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default TodoSagas;