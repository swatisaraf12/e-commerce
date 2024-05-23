import { createContext } from "react";
// import { reducer as formReducer } from "redux-form";
// export default combineReducers({
//   form: formReducer,

// });

const defaultValues = {
  cart: [],
  user: {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateUser: () => {},
};

export const AppContext = createContext(defaultValues);
