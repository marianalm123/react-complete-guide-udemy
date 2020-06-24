import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  //Lifecycle Hooks not supported anymore
  // componentWillReceiveProps(props){
  //     console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  /*
     If you don't want to implement manually the props check you can extend the class
     with another component named PureComponent, this component already implements
     "shouldComponentUpdate" with a complete props check
  */
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot !!'};
  }

  //Lifecycle Hooks not supported anymore
  //componentWillUpdate() {}

  // use when you need to do a clean up work
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
       return (
         <Person
           click={() => this.props.clicked(index)}
           name={person.name}
           age={person.age}
           key={person.id}
           changed={(event) => this.props.changed(event, person.id)}
         />
       );
     });
  }
}


export default Persons;
