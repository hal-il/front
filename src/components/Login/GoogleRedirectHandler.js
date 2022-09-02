import { login } from "api/login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleRedirectHandler() {
  const navigate = useNavigate();
  const accessToken = new URLSearchParams(
    window.location.hash.substring(1)
  ).get("access_token");

  useEffect(() => {
    // async () => {
    //   try {
    //     await login(accessToken, (res) => {
    //       const ACCESS_TOKEN = res.data.accessToken;
    //       localStorage.setItem("token", ACCESS_TOKEN);
    //       if (msg == "first") {
    //         naviagate("/register");
    //       } else {
    //         navigate("/");
    //       }
    //     });
    //   } catch (err) {
    //     console.error(err);
    //     alert("로그인에 실패했습니다.");
    //   }
    // };
  });
}

export default GoogleRedirectHandler;
