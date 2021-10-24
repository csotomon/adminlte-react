import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import user2 from './../../utils/img/user2-160x160.jpg'

import adminLTELogo from './../../utils/img/AdminLTELogo.png'

import {
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    Form,
    Button,
    Badge
} from 'reactstrap';

function SideBar() {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src={adminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={user2} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <a href="#Alexander" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    {/* SidebarSearch Form */}
                    <Form inline>
                        <InputGroup data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <InputGroupAddon addonType="append">
                                <Button className="btn-sidebar" color="">
                                    <FontAwesomeIcon icon={["fas", "search"]} fixedWidth />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>


                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <Nav className="nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library --> */}
                            <NavItem className="menu-open">
                                <NavLink href="#" active={true}>
                                    <FontAwesomeIcon icon={["fas", "tachometer-alt"]} className="nav-icon" />
                                    <p>
                                        Starter Pages
                                        <FontAwesomeIcon icon={["fas", "angle-left"]} className="right" />
                                    </p>
                                </NavLink>
                                <Nav className="nav-treeview">
                                    <NavItem>
                                        <NavLink href="#" active={true}>
                                            <FontAwesomeIcon icon={["far", "circle"]} className="nav-icon" />
                                            <p>Active Page</p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            <FontAwesomeIcon icon={["far", "circle"]} className="nav-icon" />
                                            <p>Inactive Page</p>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <FontAwesomeIcon icon={["fas", "th"]} className="nav-icon" />
                                    <p>
                                        Simple Link
                                        <Badge color="danger" className="right">New</Badge>
                                    </p>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    );
}

export default SideBar;