import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import { Formik, Form} from "formik";
import MyInputFormik from "../components/MyInputFormik";

const LoginFormik = ({props}) =>{
        
    return(

        <Container>
            <Formik 
                
            initialValues={{
                userName:"",
                userPassword:""
            }}
            onSubmit={values => {
                console.log(values);
                this.userLogin(values);
                
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
                    name="userPassword"
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

export default LoginFormik;