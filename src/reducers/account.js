import { getUserFulfilled,getUserAccount,getUserPending,getUserRejected } from "../actions";
import { increment1,incrementbyamount,inc } from "../actions";
export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
    
        case getUserPending:
        
        return { ...state, pending:true};
      case incrementbyamount:
        return { amount: state.amount + action.payload,pending:false };
  
      case getUserFulfilled:
        return {...state,pending:false };
  
  case inc:
    console.log("inc in reducer")
    return { amount: state.amount + 1}
      case getUserRejected:
        console.log("reached");
        return { ...state, error: action.error, pending: false };
      default:
        console.log("default reducer")
        return state;
    }
  }