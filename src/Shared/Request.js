import axios from "axios";

// 인스턴스 : 사례
const instance = axios.create({
  baseURL: "http://" 
});

let user_token = localStorage.getItem("user_token");
// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
instance.defaults.headers.common["authorization"] = 'Bearer ' + user_token;
instance.defaults.withCredentials = true;

// 테스트용
export const customAxios = axios.create({
  baseURL: 'http://13.125.50.85'
})

customAxios.defaults.withCredentials = true;

export default instance;