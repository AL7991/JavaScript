import { Form, Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import takeCredit from "../../services/transactionsServices/credit/takeCredit/takeCreditService";
import MyInputFormik from "../MyInputFormik";

const TakeCreditComponent = (props) =>{

    const handleSubmit =  value =>{
        if(value){
             props.takeCredit(value);
        }
    }

    if(props.isLoading){
        return <div>Loading... </div>
    }else{
        return(
            <Formik
            initialValues={{
                amount:""
            }}
            onSubmit={  value => {
                 handleSubmit(value.amount);
            }}
            >
                <Form>
                <Row>
                    <Col>
                        <MyInputFormik label={"Amount of Credit to take:"} name={"amount"} type="number" className="form-control"/>
                    </Col>
                    <Col xs={12}>
                                <button type="submit" className="btn btn-primary btn-lg btn-block mt-2">Send</button>
                    </Col>
                </Row>
                </Form>
            </Formik>
        )
    }

};

function mapStateToProps(state) {
    return {
        isLoading: state.loginReducer.loginLoading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        takeCredit: value =>{
        dispatch(takeCredit(value));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TakeCreditComponent);