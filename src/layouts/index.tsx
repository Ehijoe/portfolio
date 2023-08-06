import React from "react";

import Navbar from '../components/Navbar';

function Layout({ children, location }) {
    const tabs = {
        '/': 'home',
        '/projects/': 'projects',
    };

    return (
        <div style={{'background-image':'url(/images/texture.jpeg)'}}>
            <Navbar active={tabs[location.pathname]} />
            {children}
        </div>
    );
}

export default Layout;
