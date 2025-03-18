import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayouts;