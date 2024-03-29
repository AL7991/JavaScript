import { connect } from "react-redux";
import { Component } from "react";
import { Container } from "react-bootstrap";
import RepayCreditComponent from "../../components/credit/RepayCreditComponent";
import TakeCreditComponent from "../../components/credit/TakeCreditComponent";
import { messageBagActions } from "../../actions/messageBagActions";


class CreditPage extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(messageBagActions.clear())
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
    
                    {this.props.loggedUser.account.alreadyHaveCredit  && (<div>
                        <RepayCreditComponent amount={this.props.loggedUser.account.amountOfCredit } />
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