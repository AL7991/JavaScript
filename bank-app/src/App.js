import './App.css';
import { LoginPage } from './pages/LoginFormik';
import { connect } from "react-redux";
import { Component } from 'react';
import RegisterFormik from './pages/RegisterFormik';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { message, type } = this.props;
    return (
      <div>
        {message !== undefined &&(
          <div role='alert' className={`message ${type}`}>
            {message}
          </div>
        )}
        {/* <LoginPage/> */}
        <RegisterFormik/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.messageBagReducer.message,
    type: state.messageBagReducer.type
  };
}

export default connect(mapStateToProps,null)(App);
