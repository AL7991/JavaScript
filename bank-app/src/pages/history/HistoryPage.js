import { connect } from "react-redux";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoryItem from "../../components/history/historyItem";
import historyTransactionPage from "../../services/transactionsServices/history/historyTransactionPageService";

class HistoryPageAll extends Component {
    
    constructor(props){
        super(props);
        this.state={
            page:0
        };
    }

    fetchHistoryTransaction = page => {
        this.props.fetchHistory(page);
    }

    componentDidMount = () => {
        this.fetchHistoryTransaction(this.state.page);
    }

    updatePage = id =>{
        this.setState({page:id},this.fetchHistoryTransaction(id));
    }

    renderList = () => {
        const historyTransactions = [...this.props.history];
        return historyTransactions.map((page,i) =>(
            <Col xs={12} md={4} key={i}>
            <HistoryItem transaction={page} key={i}/>
            </Col>
        ))
    }

    renderButtons = () =>{
        return (
            <Row>
                {this.state.page > 0 && (<Col><button onClick={() =>this.updatePage(this.state.page - 1)}>Prev</button></Col>)}
                <Col>Page: {this.state.page + 1}</Col>
                <Col>PageTotal: {this.props.totalPages}</Col>
                {this.props.totalPages > this.state.page + 1 && (<Col><button onClick={() =>this.updatePage(this.state.page + 1)}>Next</button></Col>)}
            </Row>
        )
    }

    render(){

        if (this.props.historyLoading) {
            return <div>Ładowanie...</div>;
        } else {
            return (
                <Container>
                    <Row>
                        {this.renderList()}

                        <nav>
                            <ul>{this.renderButtons()}</ul>
                        </nav>
                        
                    </Row>

                </Container>
            );
        }
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

export default connect(mapStateToProps,mapDispatchToProps)(HistoryPageAll);