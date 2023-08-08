import axios from "axios";


//action constant names
export const increment1 = "account/increment1";
export const incrementbyamount = "account/incrementbyamount";

export const bonusincrementbyamount = "bonus/incrementbyamount";
export const getUserPending = "account/getUserAccount/pending";
export const getUserFulfilled = "account/getUserAccount/fulfilled";
export const getUserRejected = "account/getUserAccount/rejected";
export const incBonus = 'bonus/increment';
export const inc="account/inc"
//action creators
export function incrementFunction() {
  console.log("increment fuynction")
    return { type: inc };
  }
 export function incrementbyamountFunction(value) {
    return { type: incrementbyamount, payload: value };
  }
  export function getuserpending() {
    return { type: getUserPending };
  }
  export function getuserfulfilled(value) {
    return { type: getUserFulfilled, payload: value };
  }
  export function getuserrejected(error) {
    return { type: getUserRejected, error: error };
  }
  export function incrementBonus(value) {
    return { type: incBonus };
  }
  //async api call
  export function getUserAccount(id) {
    return async (dispatch, getState) => {
      try {
          dispatch(getuserpending)
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
  
        dispatch(getuserfulfilled(data.account));
      } catch (error) {
        dispatch(getuserrejected(error.message));
      }
    };
  }
