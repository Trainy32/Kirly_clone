import axios from "axios";
import { getCookie } from "./Cookie";

// let access_token = getCookie('Authorization')
let user_token = localStorage.getItem("authorization")


const instance = axios.create({
<<<<<<< HEAD
  baseURL: 'http://13.125.50.85'
=======
  baseURL: "http://13.125.50.85" 
>>>>>>> f2a548e2bc9ff8596e9ee78da4a615ec36722b68
});

instance.defaults.headers.common['Authorization'] = 'Bearer ' + user_token;
instance.defaults.withCredentials = true;

export const customAxios = axios.create({
  baseURL: 'http://13.125.50.85'
});

customAxios.defaults.withCredentials = true;
export default instance;