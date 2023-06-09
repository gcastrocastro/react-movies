import {useState} from 'react';
import './LoginPage.css';

export default function LoginPage({setUser}) {
    const [newUser, setNewUser] = useState('');

    function handleChange(evt) {
        setNewUser(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setUser(newUser);
        setNewUser('');
    }

    return(
        <div className="background-container">
            <div className='form-container'>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Please enter a Username</label>
                    <input 
                        type="text" 
                        value={newUser}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}