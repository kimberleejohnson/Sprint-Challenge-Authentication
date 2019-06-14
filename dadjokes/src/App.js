// Deleting logo and App.css because I don't need 
import React from 'react';
// Now that I imported BrowserRouter in index.js, I can add Routes and NavLink in App.js 
// Importing withRouter so we can redirect to login upon logout 
import { Route, NavLink, withRouter } from 'react-router-dom'; 

// Importing the components that will be displayed 
import SignUp from './SignUp';

// Changing App to a Class component 
class App extends React.Component {

  // PLACEHOLDER for logout function 

  // PLACEHOLDER for redirect props.push 

  render() {
    return (
      <>
      <h1>Welcome to Dad Jokes!</h1>

      <p>This simple web app uses a JWT-based authentication system to let you view some secret Dad jokes...if you've signed up!</p>

      <ul>
        <li><NavLink to="/signup">Sign Up</NavLink></li>

      </ul>

      <div>
        <Route path="/signup" component={SignUp} /> 
      </div>
      </>
    );
  }
}

export default withRouter(App);
