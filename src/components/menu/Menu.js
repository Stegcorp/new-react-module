import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div>
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/todos'}><b>todos </b></Link></li>
                    <li><Link to={'/albums'}><b>albums </b></Link></li>
                    <li><Link to={'/comments'}><b>comments </b></Link></li>
                </ul>
            </div>
            <Outlet/>/
        </div>
    );
};

export default Menu;
