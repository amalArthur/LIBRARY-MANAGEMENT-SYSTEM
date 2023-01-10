import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import BookList from "./booklist";

const ReadBook = () => {
    let[book,setBook]=useState([])

    //to get route parameter
    
    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`http://localhost:4000/books/${params.id}`)
            let data=await response.json()
            setBook(data)
        }
        fetchData()
    },[])
   
    return ( 
        <div className="readbook">
            <h1>Read Book</h1>
            <div className="card">
                <h2>{book.title}</h2>
                <div className="card-footer">
                    <h5>Short desc</h5>
                    <p>{book.shortDescription}</p>
                    <h5>Long desc</h5>
                    <p>{book.longDescription}</p>
                </div>
                {/* <BookList/> */}
                
            </div>
            
        </div>
        
     );
}
 
export default ReadBook;