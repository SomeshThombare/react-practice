import { useState } from "react";
export default function CommentForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: "",
    });

    let handleInputChange = (event) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            }
        });
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: "",
        });
    };

    return (
        <div>
            <h4>Comment Form</h4>  
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                placeholder="Enter Username" 
                type="text" 
                value={formData.username}
                onChange={handleInputChange}
                name="username"
                id="username"
                />
                <br/> <br />

                <label htmlFor="remarks">Remarks:</label> 
                <textarea value={formData.remarks}
                placeholder="add a few remarks"
                onChange={handleInputChange}
                name="remarks"
                id="remarks"
            
                >Remarks</textarea>
                <br /><br />

                <label htmlFor="rating">Rating:</label>
                <input placeholder="Enter rating" 
                type="number" 
                min="1" max="5" 
                value={formData.rating}
                onChange={handleInputChange}
                name="rating"
                id="rating"
                />
                <br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}   

