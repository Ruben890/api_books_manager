import { Link } from "react-router-dom"
import { useState } from "react"
import { authLogin } from "../../services/auth/auth.services"
import "./login.css"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await authLogin(email, password);
        if (response.errorMessage) {
            setErrorMessage(response.errorMessage);
        } else {
            window.location.href = '/'
        }

    }

    return (
        <>
            <header>
                <nav className="p-3">
                    <Link to='/' className="text-white btn btn-primary"><i className="bi bi-arrow-return-left"></i>  Back</Link>
                </nav>
            </header>
            <div className="container w-75  rounded  shadow" style={{ marginTop: '3rem' }} >
                <div className="row  align-items-stretch">
                    <div className="col bg-image d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start">


                    </div>
                    <div className="col bg-withe rounded-end">
                        <h2 className="fw-blod text-center py-5">welcome</h2>

                        {/* LOGIN */}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor='email' className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {errorMessage && <p className="text-danger">{errorMessage}</p>}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div className="my-3">
                                <span className="signup">Don't have an account? <Link to="/signup">Sign Up</Link></span>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}
