import { useState } from "react";
import { getBooks } from "../../services/books/books.sevices";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../features/boosk/books.slice";

export const PaginationBooks = () => {
    const books = useSelector(state => state.book.page);
    const [paginationBooks, setPagination] = useState(0);
    const dispatch = useDispatch();


    const pagination = async (page) => {
        setPagination(page)
        await dispatch(getBooks(page));
        dispatch(setPage(page));
    };


    return (
        <div className="d-flex p-3 justify-content-between w-100" >
            <button
                className="btn m-2 border border-primary"
                onClick={() => pagination(paginationBooks - 1)}
                disabled={books <= 0}
            >
                Back Page
            </button>
            <button
                className="btn m-2 border border-primary"
                onClick={() => pagination(paginationBooks + 1)}
                disabled={books >= 1}
            >
                Next Page
            </button>
        </div>
    );
}
