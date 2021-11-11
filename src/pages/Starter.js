import React from 'react';

import {
    Button,
    CardText,
    CardTitle,
    CardBody,
    CardLink,
    CardHeader,
    Card,
} from 'reactstrap';



function Starter() {

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
                                <li className="breadcrumb-item"><a href="#Home">Home</a></li>
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