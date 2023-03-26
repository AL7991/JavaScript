import { Form, Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import MyInputFormik from "../MyInputFormik";
import { connect } from "react-redux";
import RepaymentAllOfCredit from "../../services/transactionsServices/credit/repayCredit/repaymentAllOfCreditService";
import RepaymentPartOfCredit from "../../services/transactionsServices/credit/repayCredit/repaymentPartOfCreditService";


const RepayCreditComponent = (props) =>{
    const handleSubmit = value =>{
        if(value){
            props.repayPartCredit(value);
        }
    }

    const onClick = () => {
        props.repayAllCredit();
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
                    Amount of credit to pay: {props.amount}
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <MyInputFormik label={"Amount"} name={"amount"} type="number" className="form-control"/>
                        </Col>
                        <Col xs={12}>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-2">Send</button>
                        </Col>
                        <Col xs={12}>
                                    <button type="button" onClick={onClick} className="btn btn-primary btn-lg btn-block mt-2">Repayment All Of Credit</button>
                        </Col>
                    
                    </Row>
                </Form>
            </Formik>
    
        )
    }

}
function mapStateToProps(state) {
    return {
        isLoading: state.loginReducer.loginLoading,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        repayPartCredit: value =>{
            dispatch(RepaymentPartOfCredit(value));
        },
        repayAllCredit: () =>{
            dispatch(RepaymentAllOfCredit());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(RepayCreditComponent);
