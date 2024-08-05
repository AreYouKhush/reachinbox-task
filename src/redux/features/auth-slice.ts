import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  exp: string;
};

type IncomingData = {
  exp: string;
  iat: string;
  user: UserType;
};

type UserType = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
};

const initialState = {
  value: {
    isAuth: false,
    id: "",
    email: "",
    firstname: "",
    lastname: "",
    exp: "",
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<IncomingData>) => {
      const pl = {
        value: {
          isAuth: true,
          id: action.payload.user.id,
          email: action.payload.user.email,
          firstname: action.payload.user.firstName,
          lastname: action.payload.user.lastName,
          exp: action.payload.exp,
        },
      };
      console.log(pl);
      return pl;
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
