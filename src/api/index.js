import axios from "axios";

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
