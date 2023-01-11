import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import '../styles/booklist.css'
// import AddUser from "./adduser";
// import ReadBooks from "./readbook";

const BookList = () => {
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    }, [books])

    let handleDelete = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title}will be deleted permanently`)
    }
let location =useLocation()
let navigate=useNavigate()
let handleRead=(id)=>{
    if (location.pathname=='/admin/book-list') {
        navigate(`/admin/book-list/${id}`)
    } else {
        navigate(`/user/book-list/${id}`)
    }
}

// git add .

    let read=(id)=>{
        navigate(`/admin/book-list/${id}`)
    }

    return (
        <div className="booklist">
            <h1>Book List</h1>
            <h2>Total books:{books.length}</h2>
            <div className="books_section">
                {books.map(data => (
                    <div className="bookcard">
                        <div className="thumbnail">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="component">
                            <h4>Title:{data.title}</h4>
                            <h6>Authors:{data.authors}</h6>
                            <h6>Categories:{data.categories}</h6>
                            <h4>Pagecount:{data.pageCount}</h4>
                            <button onClick={() => read(data.id)}>Read More</button>
                            { location.pathname=='/admin/book-list'&&  <button onClick={() => handleDelete(data.id, data.title)}>Delete</button> }
                            {/* localhost:40000/books/{id number} */}
                        </div>
                        {/* <ReadBooks/> */}
                        {/* <AddUser/> */}
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;