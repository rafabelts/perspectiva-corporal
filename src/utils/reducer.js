export const actions = {
  CHANGE_USER_AGREES_STATE: "CHANGE_USER_AGREES_STATE",
  SET_USER_DATA: "SET_USER_DATA",
  CHANGE_DATA_FILLED_STATE: "CHECK_DATA_FILLED_STATE",
  SET_USER_BODY: "SET_USER_BODY",
  CHANGE_BODY_SELECTED_STATE: "CHANGE_BODY_SELECTED_STATE",
  SET_FINAL_INFO: "SET_FINAL_INFO",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_USER_AGREES_STATE:
      return {
        ...state,
        agrees: action.payload,
      };
    case actions.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        userDataFilled: true,
      };
    case actions.CHANGE_DATA_FILLED_STATE:
      return {
        ...state,
        userDataFilled: action.payload,
      };
    case actions.SET_USER_BODY:
      return {
        ...state,
        userData: {
          ...state.userData,
          body: action.payload,
        },
        bodySelected: true,
      };
    case actions.CHANGE_BODY_SELECTED_STATE:
      return {
        ...state,
        bodySelected: action.payload,
      };
    case actions.SET_FINAL_INFO:
      return {
        ...state,
        userData: {
          ...state.userData,
          issue: action.payload.issue,
          inTreatment: action.payload.inTreatment,
        },
        finalInfoAnswered: true,
      };
    default:
      return state;
  }
};
