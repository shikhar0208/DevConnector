import { v4 as id } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// dispatch is a parameter and that can be done by "thunk"
export const setAlert = (msg, alertType, timeout = 3000) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout
  );
};
