import { configureStore } from "@reduxjs/toolkit"
import BoocksReducer from "../features/boosk/books.slice"
import AuthUserReducer from "../features/auth/auth.user.slice"
export const store = configureStore({
    reducer: {
        book: BoocksReducer,
        user: AuthUserReducer
    }
})


