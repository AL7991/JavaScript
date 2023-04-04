import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationItem = props => {
    return(
        <Col>
        <Link to={props.link} className="navigation__link">
            {props.title}
        </Link>
        </Col>
    );
}

export default NavigationItem;