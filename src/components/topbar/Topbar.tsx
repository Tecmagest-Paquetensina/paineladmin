import React from 'react'
import { NotificationsNone, Language, Settings  } from '@material-ui/icons';
import "./topbar.css"
import logo from '../../logo.png'


export default function Topbar() {
    return (
        <div className="topbar" >
            <div className="topbar__Wrapper">
            <div className="topbar__Left">
                <img className="topbar__Logo" src={logo} alt="PaqueteCommerce" />
                <span className="topbar__Text active">PaqueteCommerce</span>
                </div>
            <div className="topbar__Right">
                <div className="topbar__IconContainer">
                    <NotificationsNone />
                    <span className="topbar__IconBag">2</span>
                </div>
                <div className="topbar__IconContainer">
                    <Language />
                    <span className="topbar__IconBag">2</span>
                </div>
                <div className="topbar__IconContainer">
                    <Settings />
                </div>
                <img src="images/users/1.png" alt="" className="topbar__avatar" />
            </div>
            </div>
        </div>
    )
}


