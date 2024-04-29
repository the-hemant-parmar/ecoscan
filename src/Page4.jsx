import React, { useState } from "react";
import bg_image from "./assets/images/page-4-bg.jpg";

function Page4() {
    const [formData, setFormData] = useState({
        email: "",
        image: null,
        isChecked: false,
    });

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else if (e.target.type === "checkbox") {
            setFormData({ ...formData, isChecked: e.target.checked });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("email", formData.email);
            formDataToSend.append("image", formData.image);
            // formDataToSend.append("image", formData.image);
            formDataToSend.append("isChecked", formData.isChecked);

            const response = await fetch("http://localhost:8000/predict", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            // Handle successful response
            const data = await response.json();
            console.log("Response from backend:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div id="page3">
            <div id="page4" className="gradient-overlay"></div>
            <img src={bg_image} className="page-4-bg" alt="Page Background" />

            <div className="elem">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your details with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputImage"
                            className="form-label"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="exampleInputImage"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            name="isChecked"
                            checked={formData.isChecked}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page4;

// // Page4.jsx
// import React from 'react';
// import bg_image from './assets/images/page-4-bg.jpg';

// function Page4() {
//     return (
//         <div id="page3">
//             <div id="page4" className="gradient-overlay"></div>
//             <img src={bg_image} className="page-4-bg" alt="Page Background" />

//             <div className="elem">
//                 <form>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                         <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputImage" className="form-label">Image</label>
//                         <input type="file" className="form-control" id="exampleInputImage" accept="image/*" />
//                     </div>
//                     <div className="mb-3 form-check">
//                         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Page4;
