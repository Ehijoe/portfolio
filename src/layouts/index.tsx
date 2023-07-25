import React from "react";

import Navbar from '../components/Navbar';

function Layout({ children, location }) {
    const tabs = {
        '/': 'home',
        '/projects/': 'projects',
    };

    return (
        <div style={{'background-image':'url(/images/texture.jpeg)'}}>
            <div className='md:container mx-auto'>
                <Navbar active={tabs[location.pathname]} />
                <div className='w-full h-16 mb-10' />
                {children}
            </div>
        </div>
    );
}

export default Layout;
