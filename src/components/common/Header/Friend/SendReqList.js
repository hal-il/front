import defaultImg from "assets/defaultImg.png";
import FriendItem from "components/common/Header/Friend/FriendItem";

function SendReqList() {
  const reqList = [
    { name: "물만두꽁", imgUrl: defaultImg },
    { name: "미첼", imgUrl: defaultImg },
    { name: "쭈니", imgUrl: defaultImg },
    { name: "킹애플", imgUrl: defaultImg },
  ];

  return (
    <div className="receive-req-list">
      {reqList.map((req, index) => {
        return <FriendItem key={index} name={req.name} imgUrl={req.imgUrl} />;
      })}
    </div>
  );
}

export default SendReqList;
