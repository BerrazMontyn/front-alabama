import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk"
import { cervezasSlice }from "./cervezasSilce";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cervezas, details, precarga"],
};

const rootReducer = combineReducers({
  cervezas: cervezasSlice.reducer,
 
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
reducer: persistedReducer,
middleware: [thunk],
});
