import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import { Formik, Form} from "formik";
import MyInputFormik from "../components/MyInputFormik";
import RegisterUser from "../services/RegisterService";
import { connect } from "react-redux";

class RegisterFormik extends Component {

    constructor(props){
        super(props);
        this.state={
            errors:[]
        };
    }

    handleSubmit =  values => {
        let error = false;
        this.setState({errors:[]});

        for (const value in values) {
            if(!values[value]){
                if(value == "userName"){
                    this.setState(prevState => ({ errors:[...prevState.errors,{fieldError:"login"}]}));
                }else{
                    this.setState(prevState => ({ errors:[...prevState.errors,{fieldError:value}]}));
                }
                error = true;
            }
          }
        if(!error){
            this.props.regUser(values);
        }else{
            console.log("errors has been caught");
        }

    };

    render(){
        
    return(

        <Container>

            {this.state.errors.map((error, i)=>
                <Row key={i}>
                    <Col className="alert alert-danger" xs={12} md={4} key={i}>

                       <div key={i}>{error.fieldError} field is required.</div> 

                    </Col>
                </Row>
            )}

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
                        <button type="submit" className="btn btn-primary btn-lg btn-block mt-2">Send</button>
                        </Col>
                
                    </Row>
                
            </Form>

            
            </Formik>

        </Container>
            
    )

}


}

const mapDispatchToProps = dispatch => {
    return {
        regUser: user =>{
        dispatch(RegisterUser(user));
        }
    };
}


export default connect(null,mapDispatchToProps)(RegisterFormik);