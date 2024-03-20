import { createSlice } from "@reduxjs/toolkit";
import { Doctor, User } from "../assets/data/doctors";

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
      preState.user = null;
    },
  },
});

export const userActions = userSlice.actions;
