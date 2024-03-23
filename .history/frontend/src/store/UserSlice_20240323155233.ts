import { createSlice } from "@reduxjs/toolkit";
import { Doctor, User } from "../assets/data/doctors";
import queryClient from "../util/query_client";

type Slice = {
  user: User | Doctor | null | undefined;
};

const initialState: Slice = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(preState, action) {
      preState.user = action.payload.user;
    },

    update(preState, action) {
      preState.user = action.payload.user;
    },

    logout(preState) {
      document.cookie = "";
      queryClient.clear();

      preState.user = null;
    },
  },
});

export const userActions = userSlice.actions;
