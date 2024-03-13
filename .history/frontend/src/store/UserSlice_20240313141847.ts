import { createSlice } from "@reduxjs/toolkit";
import { User } from "../assets/data/doctors";

type Slice = {
  user: User | null | undefined;
};

const initialState: Slice = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(preState, action) {
      preState.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
