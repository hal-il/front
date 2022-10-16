import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useDispatch } from "react-redux";

import "styles/Header/Header.scss";
import { setFriendOpen } from "modules/sidebar";

function Header() {
  const dispatch = useDispatch();
  const onSetFriendOpen = (friendOpen) => dispatch(setFriendOpen(friendOpen));

  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Typography component="div" sx={{ flexGrow: 1 }}>
          &nbsp;
        </Typography>
        <IconButton className="header__icon">
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton
          className="header__icon"
          onClick={() => onSetFriendOpen(true)}
        >
          <PeopleAltOutlinedIcon />
        </IconButton>
        <IconButton className="header__icon">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton className="header__icon">
          <MenuOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
