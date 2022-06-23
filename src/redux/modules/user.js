import axios from 'axios'
import instance from '../../shared/Request'

// 액션
const SETUSER = 'user/SETUSER'

// 액션생성함수
export function set_user(userData) {
  return { type: SETUSER, userData }
}

//미들웨어
export const set_address_AX = (item_data) => {
  return function (dispatch) {
    axios.get('/api/address')
      .then(response => console.log(response))
      .catch((err) => {
        console.log(err)
        window.alert('에러가 발생했어요 ㅠㅠ!')
      })
  }
}

// 초기값
const initialState = {
  user: {},
  userAddress:[],
  isLogin:false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'user/SETUSER': {
      const user = action.userData
      return { user: user , isLogin: true }
    }

    default:
      return state;

  }
}

