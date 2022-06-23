import axios from 'axios'
import instance, {customAxios} from '../../shared/Request'

// 액션
const LOADLOCAL = 'cartlocal/LOADLOCAL'
const SELECT = 'cartlocal/SELECT'
const ADD = 'cartlocal/ADD'
const UPDATEQTY = 'cartlocal/UPDATEQTY'
const DELETE = 'cartlocal/DELETE'

// 액션생성함수
export function load_local_cart(item_list) {
  return { type: LOADLOCAL, item_list }
}

export function select_item(item_id, is_selected) {
  return { type: SELECT, item_id }
}

export function add_cart(item_data) {
  return { type: ADD, item_data }
}

export function update_qty(item_data) {
  return { type: UPDATEQTY, item_data }
}

export function delete_cart(delete_list) {
  return { type: DELETE, delete_list }
}

//로컬스토리지 관련 작동





// 초기값
const initialState = {
  is_loaded: false,
  list: [{}]
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'cartlocal/LOAD': {
      return { ...state, is_loaded: true, list: action.item_list }
    }

    case 'cartlocal/LOADLOCAL': {
      return { ...state, is_loaded: true, list: action.item_list }
    }

    case 'cartlocal/SELECT': {
      return { ...state }
    }

    case 'cartlocal/Add': {
      return { ...state, list: [...state.list, action.item_data] }
    }

    case 'cartlocal/UPDATEQTY': {
      return { ...state }
    }

    case 'cartlocal/DELETE': {
      return { ...state }
    }

    default:
      return state;
  }
}

