import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import user1 from './../utils/img/user1-128x128.jpg'
import user8 from './../utils/img/user8-128x128.jpg'
import user3 from './../utils/img/user3-128x128.jpg'
import user2 from './../utils/img/user2-160x160.jpg'

import adminLTELogo from './../utils/img/AdminLTELogo.png'

import {
    CardText,
    Navbar,
    CardTitle,
    CardBody,
    CardLink,
    CardHeader,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    InputGroup,
    InputGroupAddon,
    Form,
    Button,
    Media,
    Badge
} from 'reactstrap';

function Starter() {
    useEffect(() => {
        let styles = ['hold-transition', 'sidebar-mini'];
        styles.forEach(style => {
            document.body.classList.add(style);
        });
        return () => {
            styles.forEach(style => {
                document.body.classList.remove(style);
            });
        }
    });
    return (
        <>
            {/* // Navbar */}
            <Navbar light className="main-header navbar-white" expand={true}>
                {/* Left navbar links */}
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#" data-widget="pushmenu" href="#" role="button"><FontAwesomeIcon icon={["fas", "bars"]} /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#index3" className="d-none d-sm-inline-block">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact" className="d-none d-sm-inline-block">Contact</NavLink>

                    </NavItem>
                </Nav>
                {/* Right navbar links */}
                <Nav navbar className="ml-auto">
                    {/* Navbar Search */}
                    <NavItem>
                        <NavLink href="#" data-widget="navbar-search" href="#" role="button"><FontAwesomeIcon icon={["fas", "search"]} /></NavLink>
                        <div className="navbar-search-block">
                            <Form inline={true}>
                                <InputGroup size="sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search"
                                        aria-label="Search" />
                                    <InputGroupAddon addonType="append">
                                        <Button className="btn-navbar" type="submit" color="">
                                            <FontAwesomeIcon icon={["fas", "search"]} />
                                        </Button>
                                        <Button className="btn-navbar" type="button" data-widget="navbar-search" color="">
                                            <FontAwesomeIcon icon={["fas", "times"]} />
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>

                            </Form>
                        </div>
                    </NavItem>
                    {/* <!-- Messages Dropdown Menu --> */}
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                            tag="a"
                            data-toggle="dropdown"
                            aria-haspopup={false}
                            nav={true}
                        >
                            <FontAwesomeIcon icon={["far", "comments"]} />
                            <Badge color="danger" className="navbar-badge">3</Badge>
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-menu-lg">
                            <DropdownItem tag="a" href="#">
                                {/* <!-- Message Start --> */}
                                <Media>
                                    <Media object src={user1} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <Media body className="clearfix">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger">
                                                <FontAwesomeIcon icon={["fas", "star"]} />
                                            </span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted">
                                            <FontAwesomeIcon icon={["far", "clock"]} className="mr-1" />4 Hours Ago
                                        </p>
                                    </Media>
                                </Media>
                                {/* <!-- Message End --> */}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href="#">
                                {/* <!-- Message Start --> */}
                                <Media>
                                    <Media object src={user8} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <Media body className="clearfix">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted">
                                                <FontAwesomeIcon icon={["fas", "star"]} />
                                            </span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted">
                                            <FontAwesomeIcon icon={["far", "clock"]} className="mr-1" />4 Hours Ago
                                        </p>
                                    </Media>
                                </Media>
                                {/* <!-- Message End --> */}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href="#">
                                {/* <!-- Message Start --> */}
                                <Media>
                                    <Media object src={user8} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <Media body className="clearfix">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning">
                                                <FontAwesomeIcon icon={["fas", "star"]} />
                                            </span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted">
                                            <FontAwesomeIcon icon={["far", "clock"]} className="mr-1" />4 Hours Ago
                                        </p>
                                    </Media>
                                </Media>
                                {/* <!-- Message End --> */}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="dropdown-footer" tag="a" href="#">See All Messages</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                            tag="a"
                            data-toggle="dropdown"
                            aria-haspopup={false}
                            nav={true}>
                            <FontAwesomeIcon icon={["far", "bell"]} />
                            <Badge color="warning" className="navbar-badge">15</Badge>
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-menu-lg">
                            <DropdownItem header tag="span">15 Notifications</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href="#">
                                <FontAwesomeIcon icon={["fas", "envelope"]} className="mr-2" />
                                4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href="#">
                                <FontAwesomeIcon icon={["fas", "users"]} className="mr-2" />
                                8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag="a" href="#">
                                <FontAwesomeIcon icon={["fas", "file"]} className="mr-2" />
                                3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="dropdown-footer" tag="a" href="#">See All Notifications</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="#" data-widget="fullscreen" href="#" role="button"><FontAwesomeIcon icon={["fas", "expand-arrows-alt"]} /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" data-widget="control-sidebar" data-slide="true" href="#" role="button"><FontAwesomeIcon icon={["fas", "th-large"]} /></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            {/* /.navbar  */}

            {/* Main Sidebar Container */}
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
                            <img src={user2} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
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
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Starter Page</h1>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Starter Page</li>
                                </ol>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Card title</CardTitle>

                                        <CardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's
                                            content.
                                        </CardText>

                                        <CardLink href="#">Card link</CardLink>
                                        <CardLink href="#">Another link</CardLink>
                                    </CardBody>
                                </Card>

                                <Card className="card-primary card-outline">
                                    <CardBody>
                                        <CardTitle tag="h5">Card title</CardTitle>

                                        <CardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's
                                            content.
                                        </CardText>
                                        <CardLink href="#">Card link</CardLink>
                                        <CardLink href="#">Another link</CardLink>
                                    </CardBody>
                                </Card>
                                {/* /.card */}
                            </div>
                            {/* /.col-md-6 */}
                            <div className="col-lg-6">
                                <Card>
                                    <CardHeader>
                                        <h5 className="m-0">Featured</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <CardTitle tag="h6">Special title treatment</CardTitle>

                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button href="#" color="primary">Go somewhere</Button>
                                    </CardBody>
                                </Card>

                                <Card className="card-primary card-outline">
                                    <CardHeader>
                                        <h5 className="m-0">Featured</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <CardTitle tag="h6">Special title treatment</CardTitle>

                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button href="#" color="primary">Go somewhere</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            {/* /.col-md-6 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                <div className="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>
            {/* /.control-sidebar */}

            {/* Main Footer */}
            <footer className="main-footer">
                {/* To the right */}
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                </div>
                {/* Default to the left */}
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
            </footer>
        </>
    );
}

export default Starter;