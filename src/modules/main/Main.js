import React, { useEffect } from 'react';


import Header from './Header'


import SideBar from './SideBar';
import Starter from '../../pages/Starter';
import { Route, Switch, Redirect } from 'react-router-dom';
import ControlSideBar from './ControlSideBar';
import Footer from './Footer';

function Main() {
    useEffect(() => {
        let styles = ['hold-transition', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed'];
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
            <div className="wrapper">
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
                <ControlSideBar />
                {/* /.control-sidebar */}

                {/* Main Footer */}
                <Footer />
            </div>
        </>
    );
}

export default Main;