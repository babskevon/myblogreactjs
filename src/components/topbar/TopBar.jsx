import "./topbar.css"
import {Link} from "react-router-dom"

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topleft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="listItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>
                    {/* <li className="listItem">ABOUT</li> */}
                    {/* <li className="listItem">CONTACT</li> */}
                    <li className="listItem">
                        <Link to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link>
                    </li>
                    <li className="listItem">
                        <Link to="register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <i className="TopSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
