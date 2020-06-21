import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
      super(props);
      console.log('[App.js] constructor');

      this.state = {
          persons: [
            {id:'id1', name:'Carla', age: 28},
            {id:'id2', name:'Maria', age: 21},
            {id:'id3', name:'Joao', age: 25}
          ],
          otherState: 'some other value',
          showPersons: false
      }
    }

    static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    }

    // Lifecycle Hook not supported anymore
    // componentWillMount(){
    //   console.log('[App.js] componentWillMount');
    // }

    // In this lifecycle hook typically do things like fetching new data from server
    componentDidMount(){
      console.log('[App.js] componentDidMount');
    }

    // This lifecycle hook can be used for performance improvements
    shouldComponentUpdate(nextProps, nextState){
      console.log('[App.js] shouldComponentUpdate');
      return true;
    }

    // In this lifecycle hook typically do things like fetching new data from server
    componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
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
      console.log('[App.js] render');

      let persons = null;

      if (this.state.showPersons){
        persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                  />
        ;
      }

      return (
          <div className={classes.App}>
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
            {persons}
          </div>
      );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Does this work now?'));
    }
};

export default App;
