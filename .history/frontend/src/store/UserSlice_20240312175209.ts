import { createSlice } from "@reduxjs/toolkit";
import { User } from "../assets/data/doctors";

const userSlice = createSlice<User>({ initialState: { user: null } });
