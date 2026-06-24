import { useState } from "react"; 
import "./comment.css"; 
import CommentsForm from "./CommentForm"; 

export default function Comments() { 
  let [comments, setComments] = useState([
    { 
      username: "John Doe", 
      remarks: "This is a great product!", 
      rating: 5 
    }
  ]); 

  let addNewComment = (comment) => { 
    setComments((currComments) => [...currComments, comment]); 
  }; 

  return ( 
    <> 
      <div> 
        <h3>All Comments</h3> 
        {comments.map((comment, index) => ( 
          <div key={index} className="comment"> 
            <span>{comment.remarks}</span> 
            &nbsp; 
            <span>Rating: {comment.rating}</span> 
            &nbsp; 
            <span>By: {comment.username}</span> 
          </div> 
        ))} 
      </div> 
      <CommentsForm addNewComment={addNewComment} /> 
    </> 
  ); 
}
