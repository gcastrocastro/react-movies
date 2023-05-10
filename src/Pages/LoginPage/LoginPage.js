import {useState} from 'react';

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
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={newUser}
                        onChange={handleChange}
                        placeholder="Enter your username here!"
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}