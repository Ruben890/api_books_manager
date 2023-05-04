import { configureStore } from "@reduxjs/toolkit"
import BoocksReducer from "../features/boosk/books.slice"

export const store = configureStore({
    reducer: {
        book: BoocksReducer
    }
})


