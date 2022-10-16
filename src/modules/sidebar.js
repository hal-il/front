const SET_FRIEND_OPEN = "sidebar/SET_FRIEND_OPEN";

export const setFriendOpen = (friendOpen) => ({
  type: SET_FRIEND_OPEN,
  friendOpen,
});

const initialState = {
  friendOpen: false,
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case SET_FRIEND_OPEN:
      return {
        ...state,
        friendOpen: action.friendOpen,
      };
    default:
      return state;
  }
}
