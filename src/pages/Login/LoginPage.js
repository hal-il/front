import "styles/Login/LoginPage.scss";
import loginLogo from "assets/images/logo/image_logo.png";
import GoogleButton from "components/Login/GoogleButton";

import { Grid } from "@mui/material";

function LoginPage() {
  return (
    <Grid className="login-wrapper" container direction="column">
      <Grid item>
        <img className="login-wrapper__logo" src={loginLogo} />
      </Grid>
      <Grid item>
        <GoogleButton />
      </Grid>
    </Grid>
  );
}

export default LoginPage;
