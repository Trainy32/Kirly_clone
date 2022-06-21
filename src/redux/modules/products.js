import axios from 'axios'
import instance from '../../shared/Request'


// 액션
const LOAD = 'posts/LOAD'

// 액션생성함수
export function load_posts(post_list) {
  return { type: LOAD, post_list }
}

//미들웨어
export const load_posts_like_AX = () => {
  return function (dispatch) {
    axios.get('http://54.180.121.151/api/posts/likes')
    .then(response => dispatch(load_posts(response.data.posts)))
  }
}

// 초기값
const initialState = {
  list: [{}],
}
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'posts/LOAD': {
      return { is_loaded: true, list: action.post_list }
    }

    default:
      return state;

  }
}

