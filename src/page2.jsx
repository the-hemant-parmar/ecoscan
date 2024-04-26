import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import bg_image from './assets/images/page-2-bg.jpg';

function Page2() {
    useEffect(() => {
        gsap.from(".elem h1", {
            y: 120,
            stagger: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                start: "top 47%",
                end: "top 46%",
                scrub: 2
            }
        });
    }, []);

    return (
        <div id="page2">
            <div className="gradient-overlay"></div>
            <img src={bg_image} className="page-2-bg" alt="background" />
            <div className="elem">

                <h1><span className="page2Heading">What is EcoScan</span>
                    <span className="page2_content">
                        At ECOSCAN, our mission is to transform urban living through technological
                        innovation, sustainability, and community engagement. Discover how we're reshaping the future of
                        farming. Our project is all about identifying plant disease by uploading a picture to our
                        website
                        and our intelligent model will tell problem and solution associated with crop. <br /><br />
                        Powered by React.js, Bootstrap, GSAP, and other advanced tech stack, we ensure a
                        seamless user experience. Join us in redefining farming for a
                        sustainable tomorrow.


                    </span>
                </h1>




            </div>
        </div>
    );
}

export default Page2;
