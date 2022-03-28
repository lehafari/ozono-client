import { types } from "../types/types";
// const state = {
//     name: 'jorge',
//     logged: true
// }

export const authReducer = (state = {}, action) => {
  switch (action.types) {
    case types.login:
      return {
        ...action.paylod,
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
