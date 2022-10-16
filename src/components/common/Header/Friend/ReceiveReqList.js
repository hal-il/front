import defaultImg from "assets/defaultImg.png";
import FriendItem from "components/common/Header/Friend/FriendItem";

function ReceiveReqList() {
  const reqList = [
    { name: "물만두꽁", imgUrl: defaultImg },
    { name: "미첼", imgUrl: defaultImg },
    { name: "쭈니", imgUrl: defaultImg },
    { name: "킹애플킹애플킹애플킹", imgUrl: defaultImg },
  ];

  return (
    <div className="receive-req-list">
      {reqList.map((req, index) => {
        return (
          <FriendItem
            key={index}
            name={req.name}
            imgUrl={req.imgUrl}
            flag={true}
          />
        );
      })}
    </div>
  );
}

export default ReceiveReqList;
