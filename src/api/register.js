import { getApiInstance } from "api";

const api = getApiInstance();

function getNickNameDuplicated(param, success, fail) {
  api.get(`/todos/1`).then(success);
}

export { getNickNameDuplicated };
