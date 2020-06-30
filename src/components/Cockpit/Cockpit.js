import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  /*
    Second more used hooks that takes a function which will run every render cicle
    When you need something to update every render cicle like "Http request..."
    You can use "useEffect" as many times you want

    Do something only when name of the person is changed you need to pass an array
    with the variable "props.persons".

    In case you want the useEffect only when the application render for the first
    time you need to use an empty array.
  */
  useEffect(() => {
    console.log('[Cockpit.js] UseEffect');
    //
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in UseEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd UseEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd UseEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2){
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if (props.personsLength <=1) {
    assignedClasses.push(classes.bold); //classes = ['red','bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is realy working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

/* React.memo() gets optimization it can wrap functional component that might not need
   update with every change in the parent component.
   Ex: Cockpit doesn't update every time the name of the person is changed on input field
*/
export default React.memo(cockpit);
