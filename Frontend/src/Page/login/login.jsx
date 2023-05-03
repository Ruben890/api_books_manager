import { Link } from "react-router-dom"
export const Login = () => {

    return (
        <>
            <form className="form-group container">
                <div>
                    <input type="email" className="form-control mt-3" placeholder="Email" />
                    <input type="password" className="form-control mt-3" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className="forgot-password">Forgot Password?</p>
                <p className="signup">Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form >
        </>
    )
}