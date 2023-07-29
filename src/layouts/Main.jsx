import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;