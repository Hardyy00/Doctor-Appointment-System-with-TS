import { createSlice } from "@reduxjs/toolkit";
import { User } from "../assets/data/doctors";

type Slice = {
  user: User | null;
};

const initialState: Slice = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(preState, action) {
      preState.user = action.payload;
    },
  },
});
