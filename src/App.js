import React, {Component} from 'react';
import './App.css';
import './UserInput/UserInput';
import './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  //this is a state. pre-defiend.  we can use setState to merge(over-write) this property
  state = {
    username :'superMax'
  }

  usernameHandler = (event) => {
    this.setState({username : event.target.value})         // built-in function  to set the state.
  }


  render() {
  return (
    <div className="App">
      <UserInput changed={this.usernameHandler}
        currentName={this.state.username}/>
      <UserOutput userName= {this.state.username}/>
      <UserOutput userName= {this.state.username}/>
      <UserOutput userName="Steven"/>  
    </div>
  );
}
}

export default App;
