import { Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#384b60",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff0000",
      contrastText: "#ff0000",
    },
  },
});

function FriendItem({ name, imgUrl, flag }) {
  const handleClickProfile = () => {
    console.log(`${name} 페이지로 이동`);
  };

  const handleClickDelete = () => {
    console.log(`delete ${name}`);
  };

  const handleClickRefuse = () => {
    console.log(`${name}이 보낸 요청을 거절`);
  };

  const handleClickAccept = () => {
    console.log(`${name}이 보낸 요청을 수락`);
  };

  return (
    <div className="friend-item">
      <div className="friend-item__img">
        <img src={imgUrl} onClick={handleClickProfile} />
      </div>
      <div className="friend-item__name" onClick={handleClickProfile}>
        <div>{name}</div>
      </div>
      {/* flag가 undefined가 아닌 경우, 거절 버튼과 수락 버튼을 출력함 */}
      <ThemeProvider theme={theme}>
        {flag ? (
          <div className="friend-item__button">
            <Button
              className="friend-item__button--refuse"
              color="warning"
              variant="outlined"
              onClick={handleClickRefuse}
            >
              거절
            </Button>
            <Button
              className="friend-item__button--accept"
              color="primary"
              variant="contained"
              onClick={handleClickAccept}
            >
              수락
            </Button>
          </div>
        ) : (
          <div className="friend-item__button">
            <Button
              className="friend-item__button--delete"
              color="warning"
              variant="outlined"
              onClick={handleClickDelete}
            >
              삭제
            </Button>
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default FriendItem;
