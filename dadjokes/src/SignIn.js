import React from 'react'; 
// Importing withRouter to redirect upon login 
import { withRouter } from 'react-router-dom'; 

// Importing axios helper to make code more dry 
import api from './helpers/api'; 

class SignIn extends React.Component {
    state = {
        username: '',
        password: '',
    }

    // Defining my change handler function 
    handleSubmit = async e => {
        e.preventDefault(); 

        try {

            // Destructuring my state objects
            const {username, password } = this.state;

            // This sends information from the frontend to our backend endpoint 
            const result = await api.post('/login', {
                username, 
                password
            })

            // Storing results of login in local storage
            localStorage.setItem('token', result.data.token); 

            // Redirecting once token is set 
            this.props.history.push('/jokes'); 

        } catch (err) {
            console.error(err); 
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return(
            <> 
                <h3> Sign In </h3>
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" name="username" placeholder="username" onChange={this.handleChanges} value={this.state.username} />

                    <input type="password" name="password" placeholder="password" onChange={this.handleChanges} value={this.state.password} /> 

                    <button type="submit">Sign In</button>
                </form>
            </>
        )
    }
}

export default withRouter(SignIn); 