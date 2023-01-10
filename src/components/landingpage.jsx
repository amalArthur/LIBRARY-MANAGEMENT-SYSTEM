import { Link } from "react-router-dom";
import '../styles/landingPage.css'

const LandingPage = () => {
    return(
        <div className="landingpage">
            <div className="main">
                <h1>Library Management System</h1>
                <div className="selection">
                    <div className="admin">
                        <img width="100px" src="Images/logo7.png" alt="" /><br />
                        <Link to='/admin-login' >Admin Login</Link>
                    </div>
                    <div className="user">
                        <img width="100px" src="Images/logo7.png" alt="" /><br />
                        <Link to='/user-login' >User Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;