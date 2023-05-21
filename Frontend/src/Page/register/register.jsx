import { authRegister } from "../../services/auth/auth.service"
import { useState } from "react"
import { Link } from "react-router-dom";
export const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const hendlerSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const userRegister = Object.fromEntries(formData)
        const response = await authRegister(userRegister)
        if (response.errorMessage) {
            setErrorMessage(response.errorMessage);
        } else {
            window.location.href = '/login'
        }

    }


    return (
        <>

            <header>
                <nav className="p-3">
                    <Link to='/' className="text-white btn btn-primary"><i className="bi bi-arrow-return-left"></i>  Back</Link>
                </nav>
            </header>
            <main className="container">
                <div className="container">
                    <form className="form-group" onSubmit={hendlerSubmit} encType="multipart/form-data">
                        <div>
                            <input type="text" className="form-control mt-3 mb-3" placeholder="first name" name="first_name" />
                            <input type="text" className="form-control mt-3 mb-3" placeholder="last name" name="last_name" />
                            <input type="text" className="form-control mt-3 mb-3" placeholder="username" name="username" />
                            <input type="email" className="form-control mt-3 mb-3" placeholder="email" name="email" />
                            <input type="password" className="form-control mt-3 mb-3" placeholder="password" name="password" />
                            <input type="password" className="form-control mt-3 mb-3" placeholder="confirm password" />
                            {errorMessage && <p className="text-danger">{errorMessage}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </main>
        </>
    )
}