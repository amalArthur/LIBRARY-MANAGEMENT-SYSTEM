import {Routes,Route}from 'react-router-dom'
import UserNavbar from './usernavbar';
import UserDashboard from './userdashboard';
import BookList from './booklist';
import ReadBook from './readbook';
const UserPortal = () => {
    return ( 
        <div className="userPortal">
           <UserNavbar/>
           <Routes>
            <Route path='/'element={<UserDashboard/>}/>
            <Route path='/book-list'element={<BookList/>}/>
            <Route path="/book-list/:id"element={<ReadBook/>}/>
           </Routes>
        </div>
     );
}
 
export default UserPortal;