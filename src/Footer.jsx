import React from 'react';

function Footer() {
    return (
        <div className="footer">
            {/* Footer */}
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                {/* Right */}
                <div>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                {/* Right */}
                {/* Section: Links */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>ECOSCAN
                                </h6>
                                <p>
                                    Revolutionizing Agriculture with Advanced AI and Visionary Technology for Healthy Crop Management.
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#page1" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#page2" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#page3" className="text-reset">Scan</a>
                                </p>
                                <p>
                                    <a href="#page3" className="text-reset">Detect</a>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#page1" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#page1" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#page1" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#page1" className="text-reset">Help</a>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Bhopal, MP 10012, India</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    sample@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 91 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links */}
                {/* Copyright */}
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2025 Copyright:
                    <a className="text-reset fw-bold"
                        href="https://earthsally.com/disease-control/common-plant-diseases.html"> With❤️from Team
                        Ecoscan.</a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </div>
    );
}

export default Footer;
