const usersReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR":
      return {
        ...state,
        users: [],
      };
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
