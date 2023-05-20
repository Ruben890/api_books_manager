import { useState } from "react"
import { Header } from "../../components/header/header"
import { createBook } from "../../services/books/books.sevices"
import './createBook.css'
export const CreateBook = () => {
    const [erroMessage, setErrorMessage] = useState("")
    const [book, setBook] = useState({
        title: "",
        author: "",
        year: "",
        image: null
    });

    const hendlerSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const book = Object.fromEntries(formData)
        const response = await createBook(book)
        if (response.errorMessage) {
            setErrorMessage(response.errorMessage);
        }
    }
    return (<>
        <Header />

        <main className="conatiner-fluid p-5 m-2 d-flex justify-content-center">

            <section className="position-relative top-0">
                <div className="d-flex">
                    <form className="form-group m-3 me-5" onSubmit={hendlerSubmit}>
                        <div>
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="title"
                                name="title"
                                value={book.title}
                                onChange={(e) => setBook({ ...book, title: e.target.value })}
                            />

                            <textarea
                                type="text"
                                className="form-control mt-2"
                                placeholder="description"
                                name="description"
                                maxLength="1000"
                                style={{ resize: "none", width: "500px", height: "150px" }}
                            ></textarea>

                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="author"
                                name="author"
                                value={book.author}
                                onChange={(e) => setBook({ ...book, author: e.target.value })}
                            />

                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="publisher"
                                name="publisher"
                            />

                            <input
                                type="number"
                                className="form-control mt-2"
                                placeholder="year of publication"
                                name="year"
                                value={book.year}
                                onChange={(e) => setBook({ ...book, year: e.target.value })}
                            />
                            <input
                                type="file"
                                capture="file"
                                className="form-control mt-2"
                                placeholder="front page"
                                name="image"
                                onChange={(e) => setBook({ ...book, image: e.target.files[0] })}
                            />
                            {erroMessage && <p className="text-danger">{erroMessage}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </form>


                    <div className="NewBook">
                        <div className="cardBooks rounded shadow bg-body-tertiary m-3" style={{ minWidth: "180px" }}>
                            <img
                                src={book.image ? URL.createObjectURL(book.image) : ""}
                                alt="imageBook"
                                className="card-img rounded"
                            />
                            <div className="into rounded">
                                <h1>
                                    <span>{book.title}</span> - {book.year}
                                </h1>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    </>)

}