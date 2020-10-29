import React from "react";
import logo from "./logo.jpg";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TuneIcon from '@material-ui/icons/Tune';
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import"./Header.css";
function Header(){
    return(
        <div className="Header">
            <div className="Header_left">
              <img src={logo}  className="logo"/>
              <h2>Brand Name</h2>
            </div>
          
            <div className="Header_right">
                <div className="cart control_pannel">
                    <IconButton>
                         <ShoppingCartIcon/>
                    </IconButton>
                   
                </div>
                <div className="setting control_pannel">
                    <IconButton>
                    <TuneIcon/>
                     </IconButton>
                    
                </div>
                <div className="sign_up control_pannel">
                <IconButton>
                    <AccountCircleIcon/>
                </IconButton>
                </div>
                
            </div>
        </div>
    )
} export default Header