import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user1 from './../../utils/img/user1-128x128.jpg'
import user8 from './../../utils/img/user8-128x128.jpg'

import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    Form,
    Button,
    Media,
    Badge
} from 'reactstrap';

function Header() {
    return (
        <>
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
                            href="#"
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
                            href="#"
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
        </>
    )
}

export default Header;