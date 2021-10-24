import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';


import Header from './Header'

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

import SideBar from './SideBar';
import Starter from '../../pages/Starter';
import {Route, Switch, Redirect} from 'react-router-dom';
import ControlSideBar from './ControlSideBar';
import Footer from './Footer';

function Main() {
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
            <Header />
            {/* /.navbar  */}

            {/* Main Sidebar Container */}
            <SideBar />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/main/starter" component={Starter} />
                    <Redirect from="*" to="/main/starter" />
                </Switch>
            </div>
            {/* /.content-wrapper */}

            {/* Control Sidebar */}
            <ControlSideBar/>
            {/* /.control-sidebar */}

            {/* Main Footer */}
            <Footer/>
        </>
    );
}

export default Main;