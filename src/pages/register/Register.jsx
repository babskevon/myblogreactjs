import "./register.css"

export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register (Author)</span>
            <form className="registerForm">
                <label>Name</label>
                <input type="text" className="registerInput" placeholder="Enter Your Name" />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter email" />
                <label>Phone</label>
                <input type="text" className="registerInput" placeholder="Enter phone number" />
                <button className="registerButton">Submit</button>
            </form>
            {/* <button className="registerLoginButton">Login</button> */}
        </div>
    )
}
