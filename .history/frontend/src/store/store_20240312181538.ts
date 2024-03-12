import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";

const store = configureStore({ reducer: userSlice.reducer });

export default store;

export type RootType = ReturnType<typeof store.getState>;
export type DisPatchType = typeof store.dispatch;
