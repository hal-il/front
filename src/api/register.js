import { getApiInstance } from "api";

const api = getApiInstance();

function getNickNameDuplicated(info, success, fail) {
  api.post(`/users/create`, info).then(success);
}

export { getNickNameDuplicated };
