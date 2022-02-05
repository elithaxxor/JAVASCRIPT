import { createSlice } from "@redux/toolkit";

// THIS EXAMPLE ASSSUMS THAT EVERY EMAIL WILL HAVE A PASSWORD.  IE( EMAIL IS NAME, RATHER THAN 'USER' )
// redux implimentations
export const userSlice = createSlice({
  name: "email",
  initialState: {
    emai: null
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.email = null;
    }
  }
});

// global exports
export const { login, logout } = userSlice.actions;

export const selectEmail = (state) => state.email.email;

export default userSlice.reducer;
