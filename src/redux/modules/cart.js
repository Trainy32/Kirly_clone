import axios from 'axios'
import instance, {customAxios} from '../../shared/Request'

// 액션
const LOAD = 'cart/LOAD'
const LOADLOCAL = 'cart/LOADLOCAL'
const SELECT = 'cart/SELECT'
const ADD = 'cart/ADD'
const UPDATEQTY = 'cart/UPDATEQTY'
const DELETE = 'cart/DELETE'

// 액션생성함수
export function load_cart(item_list) {
  return { type: LOAD, item_list }
}

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

//미들웨어
export const load_cart_AX = () => {
  return function (dispatch) {
    instance.get('/api/cart')
      .then(response => { 
        console.log(response)
        dispatch(load_cart(response.data.cartByTypeList)) })
      .catch((err) => {
        console.log(err)
        window.alert('에러가 발생했어요 ㅠㅠ!')
      })
  }
}

export const add_cart_AX = (item_data) => {
  return function (dispatch) {
    instance.post('/api/cart/add/'+item_data.productId, {quantity:item_data.qty})
      .then(response => {
        dispatch(add_cart(item_data))})
      .catch((err) => {
        console.log(err)
        window.alert('에러가 발생했어요 ㅠㅠ!')
      })
  }
}

export const update_qty_AX = (item_data) => {
  return function (dispatch) {
    instance.put('/api/cart/update/'+item_data.productId, {quantity: item_data.quantity})
      .then(response => {
        console.log(response)
        dispatch(update_qty(item_data))}
        )
      .catch((err) => {
        console.log(err)
        window.alert('에러가 발생했어요 ㅠㅠ!')
      })
  }
}

export const delete_cart_AX = (delete_list) => {
  return function (dispatch) {
    console.log(delete_list)
    instance.delete('/api/cart/delete', {data: delete_list })
      .catch((err) => {
        console.log(err)
        window.alert('에러가 발생했어요 ㅠㅠ!')
      });

    delete_list.forEach((v) => {
      dispatch(delete_cart(v.productId))
    })

  }
}

// 초기값
const initialState = {
  is_loaded: false,
  list: [{}],
  itemsOnly: [{}]
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'cart/LOAD': {
      const concatList = action.item_list.map((category) => category.data).flat().filter((item) => item)
      const itemsList = concatList.map((item) => ({...item, selected:true}))
      return { ...state, is_loaded: true, list: action.item_list, itemsOnly: itemsList}
    }

    case 'cart/LOADLOCAL': {
      return { ...state, is_loaded: true, list: action.item_list }
    }

    case 'cart/SELECT': {
      const newItemsOnly = state.itemsOnly.map((item) => item.detailId === action.item_id ? {...item, selected:action.is_selected} : item)
      return { ...state, itemsOnly: newItemsOnly}
    }

    case 'cart/Add': {
      return { ...state, list: [...state.list, action.item_data] }
    }

    case 'cart/UPDATEQTY': {
      const new_item_list = state.list.map((category) => {
        if (category.package === action.item_data.package){
          return category.data.map((item) => item.detailId === action.item_data.detailId ? {...item, quantity: action.item_data.quantity} : item)
        }else {
          return category
        }
      })
      return { ...state, list: new_item_list }
    }

    case 'cart/DELETE': {
      const new_item_list = state.list.filter((v, i) => parseInt(action.detailId) !== i);
      return { ...state, list: new_item_list }
    }

    default:
      return state;
  }
}

