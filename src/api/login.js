import { getApiInstance } from "api";

const api = getApiInstance();

function login(success, fail) {
  api.get(`/login-form/google`).then(success);
}

export { login };
