import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import user1 from './../utils/img/user1-128x128.jpg'
import user8 from './../utils/img/user8-128x128.jpg'
import user3 from './../utils/img/user3-128x128.jpg'
import user2 from './../utils/img/user2-160x160.jpg'

import adminLTELogo from './../utils/img/AdminLTELogo.png'

import Header from './../modules/main/Header'

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

import SideBar from '../modules/main/SideBar';


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

        </>
    );
}

export default Starter;