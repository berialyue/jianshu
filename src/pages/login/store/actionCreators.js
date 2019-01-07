import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const login = (account, password) => {
  return (dispath) => {
    axios.get(`/api/login?account=${account}&password=${password}`)
      .then((res) => {
        const result = res.data.data
        if(result) {
          dispath()
        }else {
          alert('login fail')
        }
      })
  }
}