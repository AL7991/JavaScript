import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import { Formik, Form} from "formik";
import MyInputFormik from "../components/MyInputFormik";
import routes from "./../api";

class RegisterFormik extends Component {

    constructor(props){
        super(props);
        this.state={
            error:false
        };
    }

    registerUser =  values =>{
        fetch(routes.server + routes.route.api.users.register,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(values)
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }else{
                this.setState({error:true});
            }

            })
        .then(data =>{
            console.log(data);
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
                password:"",
                name:"",
                street:"",
                city:"",
                zip:"",
                phone:"",
                amountOfMoney:""
            }}
            onSubmit={values => {
                this.registerUser(values);
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
                        <Col  xs={12} md={4}>

                <MyInputFormik 
                    label="name"
                    name="name"
                    type="text"
                    className="form-control"
                />

                        </Col>

                        <Col  xs={12} md={4}>

                <MyInputFormik 
                    label="street"
                    name="street"
                    type="text"
                    className="form-control"
                />

                        </Col>

                        <Col  xs={12} md={4}>

                <MyInputFormik 
                    label="city"
                    name="city"
                    type="text"
                    className="form-control"
                />

                        </Col>

                        <Col  xs={12} md={4}>

                <MyInputFormik 
                    label="zip"
                    name="zip"
                    type="text"
                    className="form-control"
                />

                        </Col>

                        
                        <Col  xs={12} md={4}>

                <MyInputFormik 
                    label="phone"
                    name="phone"
                    type="text"
                    className="form-control"
                />

                        </Col>

                        <Col  xs={12} md={4}>

                <MyInputFormik 
                    label="amountOfMoney"
                    name="amountOfMoney"
                    type="text"
                    className="form-control"
                />

                        </Col>

                        <Col xs={12}>
                        <button type="submit" className="btn btn-primary btn-lg btn-block mt-2">Wyślij</button>
                        </Col>
                
                    </Row>
                
            </Form>

            
            </Formik>

        </Container>
            
    )

}


}

export default RegisterFormik;