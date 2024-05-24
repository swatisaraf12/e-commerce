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
  products: [],
  setProducts: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},
};

export const AppContext = createContext(defaultValues);
