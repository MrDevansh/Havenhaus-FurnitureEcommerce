import { createSlice } from "@reduxjs/toolkit";

// Initialize from localStorage—or empty if missing
const persistedUser = JSON.parse(localStorage.getItem("currentUser")) || null;
const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

const initialState = {
  user: persistedUser,
  registeredUsers: registeredUsers,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      // action.payload = { username, email, password }
      state.registeredUsers.push(action.payload);
      localStorage.setItem("registeredUsers", JSON.stringify(state.registeredUsers));
    },
    loginUser: (state, action) => {
      // action.payload = { email, password }
      const userFound = state.registeredUsers.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (userFound) {
        state.user = { username: userFound.username, email: userFound.email };
        localStorage.setItem("currentUser", JSON.stringify(state.user));
      } else {
        state.user = null;
      }
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("currentUser");
    },
     toggleTheme: (state) => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      state.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      state.theme = 'dark';
    }
  },
  },
});

export const { registerUser, loginUser, logoutUser,toggleTheme } = userSlice.actions;
export default userSlice.reducer;
