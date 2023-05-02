import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        page: 0,
        search: ""
    },
    reducers: {
        setBook: (state, action) => {
            state.books = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
});

export const { setBook, setPage, setSearch } = bookSlice.actions;

export default bookSlice.reducer;