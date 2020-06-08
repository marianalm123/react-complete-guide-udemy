import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
          {name:'Karina', age: 28},
          {name:'Maria', age: 21},
          {name:'Joao', age: 25}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          {name:'Karina', age: 28},
          {name: event.target.value, age: 21},
          {name:'Joao', age: 25}
        ]
      })
    }

    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

    render (){
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursos: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}/>
            })}
          </div>
        );
      }

      return (
        <div className="App">
          <h1>Hi, i'm a react App</h1>
          <p>This is realy working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}

        </div>
      );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Does this work now?'));
    }
};

export default App;
