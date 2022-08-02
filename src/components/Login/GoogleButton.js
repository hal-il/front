import { login } from "api/login";
import GoogleSigninLightNormal from "assets/images/btn_google_signin_light_normal_web@2x.png";
import axios from "axios";

function GoogleButton() {
  const handleClickButton = () => {
    login(
      (res) => {
        console.log(res);
        window.location.href = res.request.responseURL;
      },
      (err) => console.log(err)
    );
  };
  return (
    <div className="google-login">
      {/* <a href="http://localhost:8080/login-form/google"> */}
      <img
        className="google-login__button"
        src={GoogleSigninLightNormal}
        onClick={handleClickButton}
      />
      {/* </a> */}
    </div>
  );
}

export default GoogleButton;
