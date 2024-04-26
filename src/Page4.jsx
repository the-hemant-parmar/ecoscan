// Page4.jsx
import React from 'react';
import bg_image from './assets/images/page-4-bg.jpg';

function Page4() {
    return (
        <div id="page3">
            <div id="page4" className="gradient-overlay"></div>
            <img src={bg_image} className="page-4-bg" alt="Page Background" />

            <div className="elem">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputImage" className="form-label">Image</label>
                        <input type="file" className="form-control" id="exampleInputImage" accept="image/*" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Page4;
