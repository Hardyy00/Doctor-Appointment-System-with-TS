import { createSlice } from "@reduxjs/toolkit";
import { User } from "../assets/data/doctors";

const userSlice = createSlice<User | null>({ initialState: { user: null } });
