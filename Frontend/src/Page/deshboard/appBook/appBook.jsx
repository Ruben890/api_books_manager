import { useState } from "react"
import { createBook } from "../../../services/books/books.sevices"
import { Header } from "../../../components/header/header"
import { MenuSidebar } from "../../../components/menuSidebar/menuSidebar"

export const AppBook = () => {
    const [erroMessage, setErrorMessage] = useState("")

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
        <MenuSidebar />

        <main className="conatiner-fluid p-5 m-2 d-flex justify-content-center">

            <section className="w-75 position-relative top-0">
                <form className="form-group w-50" onSubmit={hendlerSubmit}>
                    <div>
                        <input type="text" className="form-control mt-2" placeholder="title" name="title" />
                        <input type="text" className="form-control mt-2" placeholder="description" name="description" />
                        <input type="text" className="form-control mt-2" placeholder="author" name="author" />
                        <input type="text" className="form-control mt-2" placeholder="publisher" name="publisher" />
                        <input type="number" className="form-control mt-2" placeholder="year of publication" name="year" />
                        < input type="file" capture="file" className="form-control mt-2" placeholder="front page" name="image" />
                        {erroMessage && <p className="text-danger">{erroMessage}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Create</button>
                </form>
            </section>
        </main>


    </>)

}