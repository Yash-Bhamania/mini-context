import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, setPassword})

    }
    return (
        <div>
            <h2>LogIn</h2>
            <input type="text"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                placeholder='username' />
                {"        "}
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Your Password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login