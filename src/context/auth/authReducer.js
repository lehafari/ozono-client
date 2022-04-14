import { types } from "../types/types";
// const state = {
//     name: 'jorge',
//     logged: true
// }

export const authReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case types.login:
      console.log("OLA ENTRE AL CASO LOGIN");
      return {
        ...action.payload,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
