import { getApiInstance } from "api";

const api = getApiInstance();

function login(token, success) {
  console.log(`${token}, 로그인 요청`);
}

export { login };
