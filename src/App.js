import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  // project 1
  // state = {
  //   // userName: "Tincy",
  //   userInput: ""
  // }

  // userNameChangeHandler = (event) => {
  //   this.setState ({
  //     userName: event.target.value
  //   })
  // }
  // project 1
  // inputChangedHandler = ( event ) => {
  //   this.setState( { userInput: event.target.value } );
  // }

  // deleteCharHandler = ( index ) => {
  //   const text = this.state.userInput.split('');
  //   text.splice(index, 1);
  //   const updatedText = text.join('');
  //   this.setState({userInput: updatedText});
  // }
  
  render() {
    // project 2
    // const charList = this.state.userInput.split('').map((ch, index) => {
    //   return <Char 
    //     character={ch} 
    //     key={index}
    //     clicked={() => this.deleteCharHandler(index)} />;
    // });

    return (
      <div className="App">
        {/* Project 1 */}
        {/* <UserInput changed={this.userNameChangeHandler} currentName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Tyson" /> */}

        {/* Project 2 
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList} */}
      </div>
    )
  }
}

export default App;
