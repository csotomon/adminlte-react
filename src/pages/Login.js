import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Card,
    CardBody,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Form,
    Button
} from 'reactstrap';

function Login() {
    useEffect(() => {
        let styles = ['hold-transition', 'login-page'];
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
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>

                {/* <!-- /.login-logo --> */}
                <Card>
                    <CardBody className="login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <Form action="../../index3.html" method="post">
                            <InputGroup className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={["fas", "lock"]} />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- /.col --> */}
                                <div className="col-4">
                                    <Button type="submit" color="primary" block>Sign In</Button>
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                        </Form>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <Button tag="a" href="#" color="primary" block>
                                <FontAwesomeIcon icon={["fab", "facebook"]} className="mr-2" />Sign in using Facebook
                            </Button>
                            <Button tag="a" href="#" color="danger" block>
                                <FontAwesomeIcon icon={["fab", "google-plus"]} className="mr-2" /> Sign in using Google+
                            </Button>
                        </div>
                        {/* <!-- /.social-auth-links --> */}
                        <p class="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p class="mb-0">
                            <a href="register.html" class="text-center">Register a new membership</a>
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}
export default Login;