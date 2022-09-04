import styled from "@emotion/styled";
import {
  AppBar,
  IconButton,
  StyledEngineProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Header() {
  return (
    <StyledEngineProvider injectFirst>
      <AppBar position="static">
        <MyToolbar>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            &nbsp;
          </Typography>
          <MyIconButton>
            <PeopleAltOutlinedIcon />
          </MyIconButton>
          <MyIconButton>
            <SearchOutlinedIcon />
          </MyIconButton>
          <MyIconButton>
            <MenuOutlinedIcon />
          </MyIconButton>
          <MyIconButton>
            <NotificationsOutlinedIcon />
          </MyIconButton>
        </MyToolbar>
      </AppBar>
    </StyledEngineProvider>
  );
}

const MyToolbar = styled(Toolbar)`
  height: 10px;
  background-color: #384b60;
`;

const MyIconButton = styled(IconButton)`
  color: white;
`;

export default Header;
