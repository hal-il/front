import axios from "axios";

// axios 객체 생성
function getApiInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      "Content-type": "application/json",
    },
  });
  return instance;
}

export { getApiInstance };
