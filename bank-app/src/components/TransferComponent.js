import {Component} from "react";
import TransferService from "../services/transactionsServices/transfer/transferService";
import { Formik, Form} from "formik";
import MyInputFormik from "./MyInputFormik";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";

class TransferComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            inProgress: false,
            accountReciverIdError: false,
            amountError: false
        }
    }

    handleSubmit = async values => {
        this.setState({inProgress: true});
        try{
            const { accountReciverId, amount} = values;
            if(!accountReciverId){
                this.setState({accountReciverIdError: true});
            }
            if(!amount || parseInt(amount) < 0){
                this.setState({amountError: true});
            }
            if(accountReciverId && amount){
                    await this.props.doTransfer(values);
            }
        }finally{
            this.setState({inProgress: false});
        }

    };

    render(){
        const { accountReciverIdError, amountError, inProgress } = this.state;
        return(
            <Container>
                {inProgress && (
                    <Row>
                        <Col>
                        Sending transfer...
                        </Col>
                    </Row>
                )}
                {accountReciverIdError && (
                    <Row>
                        <Col>
                        Error with Resever Account Id.
                        </Col>
                    </Row>
                )}
                {amountError && (
                    <Row>
                        <Col>
                        Error with Amount.
                        </Col>
                    </Row>
                )}


            <Formik 
                
            initialValues={{
                accountReciverId:"",
                amount:""
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
                    label="resever Account Id"
                    name="accountReciverId"
                    type="number"
                    className="form-control"
                />
                        </Col>
                        <Col  xs={12} md={4}>

                <MyInputFormik 
                    label="Amount"
                    name="amount"
                    type="number"
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
        doTransfer: transfer =>{
        dispatch(TransferService(transfer));
        }
    };
}

export default connect(null, mapDispatchToProps)(TransferComponent);