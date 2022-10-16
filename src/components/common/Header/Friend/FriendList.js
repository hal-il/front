import defaultImg from "assets/defaultImg.png";
import FriendItem from "components/common/Header/Friend/FriendItem";

function FriendList() {
  const friends = [
    { name: "물만두꽁", imgUrl: defaultImg },
    { name: "미첼", imgUrl: defaultImg },
    { name: "쭈니", imgUrl: defaultImg },
    { name: "킹애플", imgUrl: defaultImg },
  ];

  return (
    <div className="friend-list">
      <div className="friend-list__total">{friends.length}명</div>
      <div className="friend-list__friends">
        {friends.map((friend, index) => {
          return (
            <FriendItem key={index} name={friend.name} imgUrl={friend.imgUrl} />
          );
        })}
      </div>
    </div>
  );
}

export default FriendList;
