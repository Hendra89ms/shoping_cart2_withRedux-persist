import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["cart"], // hanya akan menyimpan state yang didefinisikan disini
};

const reducer = combineReducers({
  cart: cartSlice,
});

const persistenReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistenReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
