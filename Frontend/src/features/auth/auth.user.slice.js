import { createSlice } from "@reduxjs/toolkit";

const authUser = createSlice({
    name: "authUser",
    initialState: {
        user: [],
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setAuthUser } = authUser.actions;
export default authUser.reducer;
