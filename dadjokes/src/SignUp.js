//This route will let a new user sign up to view dadjokes 

import React from 'react'; 
// Importing withRouter so that routes can talk to components 
import { withRouter } from 'react-router-dom'; 
// Importing axios helper, so my code can be more dry
import api from './helpers/api'; 

// Creating SignUp as a Class Component 
class SignUp extends React.Component {

    state = {
        username: '', 
        password: '',
    }

    // Defining my handle submit function, which stores a token 
    handleSubmit = async e => {
        e.preventDefault(); 

        try {
            // Destructuring my state objects 
            const { username, password } = this.state 

            // Sending information from our frontend to our backend endpoint 
            const result = await api.post('/register', {
                username, 
                password
            })

            // Storing login results in local storage
            localStorage.setItem('token', result.data.token); 

            // Redirect to sign in once login set
            this.props.history.push('/login');  
        
        } catch (err) {
            console.error(err); 
        }
    }

    // Change handler function 
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value, 
        })
    }

    render() {
        return (
            <>
                <h1>Sign up to see Dad Jokes </h1> 
                <form onSubmit={this.handleSubmit}>

                    <input type="text" name="username" placeholder="username" onChange={this.handleChanges} value={this.state.username} /> 

                    <input type="text" name="password" placeholder="password" onChange={this.handleChanges} value={this.state.password} /> 

                    <button type="submit">Sign Up</button>

                </form>
            </> 
        )
    }
}

export default withRouter(SignUp); 