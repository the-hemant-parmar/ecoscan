import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Cursor from './Cursor';
import Nav from './Nav';
import video from './assets/video/vid.mp4';

function Page1() {
    useEffect(() => {
        function cursorEffect() {
            const page1Cont = document.querySelector(".page1-content");
            const curso = document.querySelector(".cursor");

            page1Cont.addEventListener("mousemove", function (dets) {
                gsap.to(curso, {
                    x: dets.x,
                    y: dets.y
                });
            });

            page1Cont.addEventListener("mouseenter", function () {
                gsap.to(curso, {
                    scale: 1,
                    opacity: 1
                });
            });

            page1Cont.addEventListener("mouseleave", function () {
                gsap.to(curso, {
                    scale: 0,
                    opacity: 0
                });
            });
        }
        cursorEffect();
    }, []);

    return (
        <div id="page1">
            <Cursor />

            <video className="vid" autoPlay muted loop src={video}></video>
            <div className="page1-content">
                <Nav />
                <h1><span>E</span><span>c</span><span>o</span><span>S</span><span>c</span><span>a</span><span>n</span></h1>
            </div>
            <div className="gradient-overlay"></div>
        </div>
    );
}

export default Page1;
