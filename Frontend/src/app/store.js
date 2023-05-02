import { configureStore } from "@reduxjs/toolkit"
import BoocksReducer from "../features/boosk/books.Slice"

export const store = configureStore({
    reducer: {
        book: BoocksReducer
    }
})


