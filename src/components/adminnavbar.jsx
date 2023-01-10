import { Link } from 'react-router-dom';
import '../styles/adminnavbar.css'

const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <h1>Admin Portal</h1>
            <div className="list">
                <ul>
                    <Link to="/admin/"><li>Dashboard</li></Link>
                    <Link to="/admin/add-book"><li>Add Book</li></Link>
                    <Link to="/admin/add-user"><li>Add User</li></Link>
                    <Link to="/admin/book-list"><li>Book LIst</li></Link>
                    <Link to="/admin/user-list"><li>User List</li></Link>
                    <Link to="/"><li>Logout</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default AdminNavbar;