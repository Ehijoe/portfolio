import React from "react";

import Navbar from '../components/Navbar';

function Layout({ children }) {
    return (
        <div style={{'background-image':'url(/images/texture.jpeg)'}}>
            <div className='md:container mx-auto'>
                <Navbar active='home' />
                {children}
            </div>
        </div>
    );
}

export default Layout;
