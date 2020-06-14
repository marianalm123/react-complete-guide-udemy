import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
          {id:'id1', name:'Karina', age: 28},
          {id:'id2', name:'Maria', age: 21},
          {id:'id3', name:'Joao', age: 25}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      // const person = Object.assign({}, this.state.persons[personIndex]);
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons: persons });
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
        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursos: 'pointer',
        ':hover': {
            backgroundColor:'lightgreen',
            color: 'black'
        }
      };

      let persons = null;

      if (this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div>
        );
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor:'salmon',
            color: 'black'
        };
      }

      const classes = [];
      if (this.state.persons.length <= 2){
        classes.push('red'); //classes = ['red']
      }
      if (this.state.persons.length <=1) {
        classes.push('bold'); //classes = ['red','bold']
      }

      return (
        <StyleRoot>
          <div className="App">
            <h1>Hi, i'm a react App</h1>
            <p className={classes.join(' ')}>This is realy working</p>
            <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}

          </div>
        </StyleRoot>
      );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Does this work now?'));
    }
};

export default Radium(App);
