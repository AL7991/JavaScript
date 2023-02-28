import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import { Formik, Form} from "formik";
import MyInputFormik from "../components/MyInputFormik";
import routes from "./../api";

class LoginFormik extends Component {

    constructor(props){
        super(props);
        this.state={
            error:false
        };
    }

    fetchToken =  values =>{
        fetch(routes.server + routes.route.api.users.login,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({userName: values.userName,password: values.password})
        })
        .then(res => {
            if(res.ok){
                return res.text();
            }else{
                this.setState({error:true});
            }

            })
        .then(data =>{
            sessionStorage.setItem('token', JSON.stringify(data));
        })
        .catch(e => {
            console.log(e);
        });
    }

    render(){

        return(

            <Container>
                <Formik 
                    
                initialValues={{
                    userName:"",
                    password:""
                }}
                onSubmit={values => {
                    console.log(values);
                    this.fetchToken(values);
                    
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
    
            </Container>
                
        )

    }
        

}

export default LoginFormik;