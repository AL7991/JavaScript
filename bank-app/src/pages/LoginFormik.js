import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form} from "formik";
import MyInputFormik from "../components/MyInputFormik";
import loggedUser from "../services/LoggedUserService";

class LoginFormik extends Component {

    constructor(props){
        super(props);
        this.state = {
            userNameError: false,
            passwordError: false
        };
    }

    handleSubmit =  values => {
        const { userName, password} = values;
        if(!userName){
            this.setState({userNameError: true});
        }
        if(!password){
            this.setState({passwordError: true});
        }
        if(userName && password){
             this.props.dispatch(loggedUser(userName,password));
        }
    };

    render(){

        const { loginLoading, isLogged, user } = this.props;

        return(

            <Container>
                 {isLogged && (<h2>Hello {user.userName}</h2>)}
                 {!isLogged && (
                    <div>
                    <h2>LogIn</h2>
                    {loginLoading && "Login loading..."}
                    {this.state.userNameError && (
                        <div>
                            Login is required
                        </div>
                    )}
                    {this.state.passwordError && (
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
                    this.handleSubmit(values);
                }}
    
                > 
                <Form>
                    {this.state.error && <Row><Col xs={12} md={4}>Wrong Login or Password</Col></Row>}
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


    
            </Container>
                
        )

    }
        

}

function mapStateToProps(state) {
    return {
        loginLoading: state.usersReducer.inprogress,
        isLogged:state.usersReducer.isLogged,
        user: state.usersReducer.user
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginFormik);
export { connectedLoginPage as LoginPage };