// import React, { useContext, useState } from 'react';
// import UserContext from '../context/UserContext';

// function Login() {
//     const [username, SetUsername] = useState('');
//     const [password, SetPassword] = useState('');

//     const {setUser} = useContext(UserContext);

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         setUser({username,password});
//     }
//   return (
//     <div>
//         <h2>login</h2>
//       <input type="text"
//             placeholder='enter text'
//             value={username}
//             onChange={(e) =>{SetUsername(e.target.value)}}
//         />  
//         <br />
//         <input type="password"
//             placeholder='enter password'
//             value={password}
//             onChange={(e) =>{SetPassword(e.target.value)}}
//         />
//         <br />
//         <button onClick={handleSubmit}>submit</button>
//     </div>
//   )
// }

// export default Login


import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            setUser({ username, password });
            // You might want to clear the inputs or provide feedback here
        } else {
            alert('Please enter both username and password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
