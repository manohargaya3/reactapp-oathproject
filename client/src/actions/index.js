import { FETCHUSER } from "./type";
import axios from "axios";

export function fetch_user() {
  return function(dispatch) {
    axios
      .get("/api/current_user")

      .then(res => dispatch({ type: FETCHUSER, payload: res.data }));
  };
}
