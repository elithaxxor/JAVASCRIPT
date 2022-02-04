import { createSlice } from '@reduxjs/toolkit';
import { useSelector} from "react-redux";

export const userSlice = createSlice({

name:"user",
    initialState: {
    user: null,
    },
    reducers: {
    login: (state, action) => {
        state.user = action.payload;
        },
    logout: (state) => {
        state.user = null;
    }
    }
})

// actions
export const {login, logout} = userSlice.actions;

// state
export const selectUser = (state) => state.user.user;

// reducer
export default userSlice.reducer;
