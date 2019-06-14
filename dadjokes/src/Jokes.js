import React from 'react'; 
// Importing withRouter to redirect when there's a 401 or 403 error 
import { withRouter } from 'react-router-dom'; 
// importing axios api helper
import api from './helpers/api'; 

class Jokes extends React.Component {
    state = {
        jokes: [], 
    }

    // Making a request to see list of users
    async componentDidMount() {
        try {
            const res = await api.get('/jokes');
            
            // Setting my state to the users retrieved from the backend
            this.setState(() => (
                {
                    jokes: res.data.jokes
                }));
            
        } catch (err) {
            console.log(err); 
            if(err.response.status === 401 || err.response.status === 403) {
                this.props.history.push('/login'); 
            } else {
            console.error(err); 
            }
        }
    }

    render() {
        return(
            <> 
                <h3> Jokes </h3>

                <ul>
                    {this.state.jokes.map(joke => (
                        <li key={joke.id}>{joke.joke}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default withRouter(Jokes); 