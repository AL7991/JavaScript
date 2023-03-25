import { connect } from "react-redux";
import { Component } from "react";
import { Container } from "react-bootstrap";
import TakeCreditComponent from "../../components/credit/TakeCreditComponent";


class CreditPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.isLoading ){
            return <div>Loading... </div>
        }else{
            return(
                <Container>
                    {!this.props.loggedUser.account.alreadyHaveCredit  && (<div>
                        <TakeCreditComponent />
                    </div>)}
                </Container>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.loginReducer.loginLoading,
        loggedUser: state.loginReducer.user
    };
}

export default connect(mapStateToProps,null)(CreditPage);