import AdminDashboard from "./admindashboard";
import AdminNavbar from "./adminnavbar";
import { Routes,Route } from "react-router-dom";
import BookList from "./booklist";
import UserList from "./userlist";
import ReadBook from "./readbook";
import AddBook from "./addbook";
import AddUser from "./adduser";
const AdminPortal = () => {
    return ( 
        <div className="adminportal">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/book-list" element={<BookList/>} />
                <Route path="/user-list"element={<UserList/>}/>
                <Route path="/book-list/:id"element={<ReadBook/>}/>
                <Route path="/add-user"element={<AddUser/>}/>
                <Route path="/add-book" element={<AddBook/>}/>

            </Routes>
            {/* <AdminDashboard/> */}
        </div>
     );
}
 
export default AdminPortal;