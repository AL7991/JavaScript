import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import NavigationItem from "./NavigationItem";

const navigation = (props) => {
    let userInfo = "";
    const { user, isLogged } = props;

    const handleClick = () =>{
        props.dispatch(loginActions.logout()); 
    }

    if(user && isLogged){
        userInfo = user.userName;
        return (
            <Container>

                <Row>
                    <NavigationItem link="/transfer" title="Transfer" />
                    <NavigationItem link="/credit" title="Credit" />
                    <NavigationItem link="/history" title="History" />
                    <Col><button onClick={handleClick}>Log Out</button></Col>
                </Row>

            </Container>
        )
    }
}

function mapStateToProps(state){
    return{
        isLogged: state.loginReducer.isLogged,
        user: state.loginReducer.user
    };
}

const connectedNavigation = connect(mapStateToProps)(navigation);
export {connectedNavigation as Navigation};