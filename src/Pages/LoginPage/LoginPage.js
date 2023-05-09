export default function LoginPage({user, setUser}) {

    function handleUserChange(evt) {
        setUser(evt.target.value);
    }

    return(
        <div>
            <form onSubmit={handleUserChange}>
                <div>
                    <label>Username</label>
                    <input 
                        value={user}
                        onChange={setUser}
                        type="text" 
                        placeholder="Enter your username here!"
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}