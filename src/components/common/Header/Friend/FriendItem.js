import { Button } from "@mui/material";

function FriendItem({ name, imgUrl }) {
  const handleClickProfile = () => {
    console.log(`${name} 페이지로 이동`);
  };

  const handleClickDelete = () => {
    console.log(`delete ${name}`);
  };

  return (
    <div className="friend-item">
      <div className="friend-item__img">
        <img src={imgUrl} onClick={handleClickProfile} />
      </div>
      <div className="friend-item__name" onClick={handleClickProfile}>
        <div>{name}</div>
      </div>
      <div className="friend-item__button">
        <Button variant="outlined" onClick={handleClickDelete}>
          삭제
        </Button>
      </div>
    </div>
  );
}

export default FriendItem;
