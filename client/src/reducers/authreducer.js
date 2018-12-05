import { FETCHUSER } from "./../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCHUSER:
      return action.payload || false;
    default:
      return state;
  }
};
