import { Component } from "react";
import HistoryItem from "./historyItem";
import historyTransactionPage from "../../services/transactionsServices/history/HistoryTransactionPageService";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";

class HistoryComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            actualPage:0,
            pages:[]
        }
    };
    
    componentDidMount = () => {
        this.props.fetchHistory(0);
        this.setState({pages:[...this.props.history]});
    }
    
    render(){
        return(
        <Container>
            <Row>
            {this.state.pages.map((transaction,i) => 
                        <Col xs={12} md={4} key={i}>
                          <HistoryItem transaction={transaction} key={i}/>
                        </Col>
            )}
            </Row>
        </Container>
    )
}

}

const mapDispatchToProps = dispatch => {
    return {
        fetchHistory: page =>{
        dispatch(historyTransactionPage(page));
        }
    };
}

const mapStateToProps= (state) => {
    return {
      historyLoading: state.historyReducer.historyLoading,
      totalPages: state.historyReducer.totalPages,
      history: state.historyReducer.history
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);