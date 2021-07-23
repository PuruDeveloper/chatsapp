export const initialState = {
  user: null,
  userName: null,
  userEmail: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default reducer;
