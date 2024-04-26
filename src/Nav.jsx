import React from 'react';

function Nav() {
    return (
        <nav>
            <div>
                <h3>EcoScan .</h3>
            </div>
            <div className="Nav2">
                <h4><a className="nav-items" href="#page2">ABOUT</a></h4>
                <h4><a className="nav-items" href="#page1">MENU</a></h4>
                <h4><a className="nav-items" href="#page3">SCAN</a></h4>
            </div>
        </nav>
    );
}

export default Nav;
