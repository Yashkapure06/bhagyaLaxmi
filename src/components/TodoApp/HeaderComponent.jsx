import React, { Component, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import AuthenticationService from "./AuthenticationService.js";
import { GiHamburgerMenu, GiCrossMark } from 'react-icons/gi';
import Button from "@mui/material/Button";
import "../../bootstrap/bootstrap.css";

const HeaderComponent = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    console.log(''+isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md  bg-primary">
                    <div> <a className="navbar-brand">Grocerytest app</a></div>
                    <ul className="navbar-nav-main">
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome/test">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailer">Add Retailer</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/viewRetailers">View Retailer</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailerBalance">Add Retailer Balance</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/managePoints">Manage points</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/drawDetails">Draw Details</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/retailerTickets">Retailer Tickets</Link></li>}
                    </ul>
                    <ul  className="  navbar-nav justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link login"><Link className="nav-link" to="/login" style={{right:0}}>Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-link logout"><Link style={{fontWeight:"bold", padding:7,color:'black', borderRadius:5, backgroundColor:"red"}} className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        
                    </ul>

                    <div className="app__navbar-smallscreen">

                        <GiHamburgerMenu className="app__navbar-menu" color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}/>

                    {toggleMenu &&(
                        <center>
                            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                <GiCrossMark fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
                                <ul className="app__navbar-smallscreen_links">
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome/test">Home</Link></li>}
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailer">Add Retailer</Link></li>}
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/viewRetailers">View Retailer</Link></li>}
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailerBalance">Add Retailer Balance</Link></li>}
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/managePoints">Manage points</Link></li>}
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/drawDetails">Draw Details</Link></li>}
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/retailerTickets">Retailer Tickets</Link></li>}
                                </ul>
                            </div>
                        </center>
                        
                    )}
                    </div>
                </nav>
            </header>
            
        )
    
}
export default HeaderComponent