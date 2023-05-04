import { createSlice } from "@reduxjs/toolkit";

const authUser = createSlice({
    name: "authUser",
    initialState: [],
    reducers: {
        setAuthUser: (state, action) => {
            state = action.payload;
        },
    },
})

export const { setAuthUser } = authUser.actions
export default authUser.reducer