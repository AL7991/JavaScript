import React, { Component } from "react";
import { connect } from "react-redux";
import {loginActions} from "../actions/loginActions"
import { Row, Col, Container } from "react-bootstrap";
import { Formik, Form} from "formik";
import MyInputFormik from "../components/MyInputFormik";


class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userNameError: false,
            passwordError: false
        };
    }

    handleSubmit = async values => {
        const { userName, password} = values;
        if(!userName){
            this.setState({userNameError: true});
        }
        if(!password){
            this.setState({passwordError: true});
        }
        if(userName && password){
            await this.props.dispatch(loginActions.login(values));
        }
    };

    handleClick = () =>{
        this.props.dispatch(loginActions.logout());
    }

    render() {
        const { loginLoading, isLogged } = this.props;
        const { userNameError, passwordError } = this.state;
        return(
            <Container>
                <Row>
                    <Col md={{offset: 4, span: 4}}>
                    {isLogged && (<button onClick={this.handleClick}>Log Out</button>)}
                    {!isLogged && (
                            <div>
                                <h2>LogIn</h2>
                                {loginLoading && "Login loading..."}
                                {userNameError && (
                                    <div>
                                        Login is required
                                    </div>
                                )}
                                {passwordError && (
                                    <div>
                                        Password is required
                                    </div>
                                )}
                        <Formik 
                    
                    initialValues={{
                        userName:"",
                        password:""
                    }}
                    onSubmit={values => {
                        console.log(values);
                        this.handleSubmit(values);
                    }}
        
                    > 
                        <Form>
                            <Row>
                                <Col xs={12} md={4}>
                        <MyInputFormik 
                            label="login"
                            name="userName"
                            type="text"
                            className="form-control"
                        />
                                </Col>
                                <Col  xs={12} md={4}>
        
                        <MyInputFormik 
                            label="password"
                            name="password"
                            type="text"
                            className="form-control"
                        />
        
                                </Col>
        
                                <Col xs={12}>
                                <button type="submit" className="btn btn-primary btn-lg btn-block mt-2">Send</button>
                                </Col>
                        
                            </Row>
                        
                        </Form>
        
                    
                        </Formik>
                        </div>
                    )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginLoading: state.loginReducer.loginLoading,
        isLogged: state.loginReducer.isLogged
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };