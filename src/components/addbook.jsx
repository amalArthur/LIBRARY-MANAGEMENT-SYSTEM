import '../styles/addbook.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    let [title,setTitle]=useState("")
    let [authors,setAuthors]=useState("")
    let [categories,setCategories]=useState("")
    let [pageCount,setPageCount]=useState("")
    let [shortDescription,setShortDescription]=useState("")
    let [longDescription,setLongDescription]=useState("")
    let [thumbnailUrl,setThumbnailUrl]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
       e.preventDefault();
       let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
       fetch(' http://localhost:4000/books',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(bookData)
       })
       alert('book has been added successfully')
       navigate('/admin/book-list')
    }

    
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl value={mail} onChange={(e) => setMail(e.target.value)}
    return ( 
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action=""onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                    <input value={authors} onChange={(e) => setAuthors(e.target.value)} type="text" required placeholder="author" />
                    </div>
                    <div className="categories">
                    <input value={categories} onChange={(e) => setCategories(e.target.value)} type="text" required placeholder="category" />
                    </div>
                    <div className="pageCount">
                    <input value={pageCount} onChange={(e) => setPageCount(e.target.value)} type="number" required placeholder="page number" />
                    </div>
                    <div className="shortDescription">
                    <textarea required name="form-control" id="" cols="30" rows="10" placeholder="short decription " value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}></textarea>
                    </div>
                    <div className="longDescription">
                    <textarea name="form-control" id="" cols="30" rows="10"placeholder="long description"value={longDescription} onChange={(e) => setLongDescription(e.target.value)}></textarea>
                    </div>
                    <div className="thumbnailUrl">
                    <input value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} type="text" placeholder="thumbnail of the book" />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;