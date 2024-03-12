import { createSlice } from "@reduxjs/toolkit";
import { User } from "../assets/data/doctors";

type Slice = {
    user : User | null;
}

const initialState : Slice  = {
    user: null;
}

const userSlice = createSlice({
  initialState: { user: null },
});
