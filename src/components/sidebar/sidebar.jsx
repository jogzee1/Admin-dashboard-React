import { LineStyle, LineStyleOutlined, Mail, MailOutlined, Message, MessageOutlined, Money, MoneyOutlined, Person, PersonOutlined, Report, ReportOutlined, ShoppingBasket, ShoppingBasketOutlined, Timeline, TimelineOutlined, TrendingUp, TrendingUpOutlined, WorkOutline } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu>">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyleOutlined className="sidebarIcon" />Home
                        </li>
                        </Link>
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <TimelineOutlined className="sidebarIcon" />Analytics
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TrendingUpOutlined className="sidebarIcon" />Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu>">
                    <h3 className="sidebarTitle">Quick Menus</h3>
                    <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PersonOutlined className="sidebarIcon" />Users
                        </li>
                    </Link>
                    <Link to="/Products" className="link">
                        <li className="sidebarListItem">
                            <ShoppingBasketOutlined className="sidebarIcon" />Products
                        </li>
                        </Link>
                        <Link to="/Transactions" className="link">
                        <li className="sidebarListItem">
                            <MoneyOutlined className="sidebarIcon" />Transactions
                        </li>
                        </Link>
                        <Link to="/Reports" className="link">
                        <li className="sidebarListItem">
                            <TrendingUpOutlined className="sidebarIcon" />Reports
                        </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarMenu>">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlined className="sidebarIcon" />Mail
                        </li>
                        <li className="sidebarListItem">
                            <TimelineOutlined className="sidebarIcon" />Feedbacks
                        </li>
                        <li className="sidebarListItem">
                            <MessageOutlined className="sidebarIcon" />Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu>">
                    <h3 className="sidebarTitle">Users</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineOutlined className="sidebarIcon" />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined className="sidebarIcon" />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
