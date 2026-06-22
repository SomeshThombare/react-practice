import { useState } from 'react'
export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    // let [fullName, setFullName] = useState((""));
    // let [username, setUsername] = useState((""));

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => {
        setFormData((prevFormData) => {
            return {  
                ...prevFormData,
                [event.target.name]: event.target.value,
            }
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input
            placeholder="Enter Full Name"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            id="fullName"
            name="fullName"

            />
            <br />
            <label htmlFor="username">Username: </label>
            <input
            placeholder="Enter Username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name = "username"
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
            placeholder="Enter Password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <br />
            <button>Submit</button>
        </form>
    );
}