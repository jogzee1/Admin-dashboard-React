import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react'
import "./topbar.css";

const topbar = () => {
    return (
        <div className="tipbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">TIMADMIN</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">5</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language />
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>

                    <img className="topAvatar" src="https://bloximages.chicago2.vip.townnews.com/stlamerican.com/content/tncms/assets/v3/editorial/f/c8/fc8248fc-bc67-11e8-9cb2-8f0ce9e20555/5ba2e32b7a8a4.image.jpg" alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default topbar;
