import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Divya', age:27},
      {name: 'Ravi', age:29},
      {name: 'Preeth', age:28}
    ],
    otherState: 'Something else',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was Clicked!!');
    this.setState({
        persons: [
          {name: newName, age:27},
          {name: 'Ravi Teja', age:29},
          {name: 'Preeth', age:29}
        ]
      }
    );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Divya', age:27},
        {name: 'Ravi Teja', age:29},
        {name: event.target.value, age:28}
      ]
    }
  );
  }

  render() {
    // inline styling
    const style = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
        { this.state.showPersons ? 
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Divi!')}>Hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}/>
          </div> : null
        }
      </div>
    );
    // Code in return stmt above gets compiled to below stmt.
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'I\'m a React App!'));
  }
}

export default App;
