import React from 'react'
import { useState } from 'react'

export const Login = () => {
    //creating two variables , data(to store login info) and
    // setData (to update login data) with the useState hook
    // we initialise the usernamr and password to empty strings
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    // we destructure the username and password from data and storeit in the username and password variables
    const { username, password } = data

    // we declare onChangeHandler 
    const onChangeHandler = e => {
        // ...data indicates every data
        // [e.target.name]: [e.target.value] indicates a particular username(name) = a particular password(value)
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    // creating the 
    const onSubmitHandler = e => {
        // this indicates that every time when the submit handler hits, it sets the username and password to their default states
        // i.e empty fields
        e.preventDefault()
        console.log(data);
    }

    return (
        <div>
            {/* we created a form that contains two inputs username and password */}
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="username" value={username} onChange={onChangeHandler} /><br />
                <input type="password" name="password" value={password} onChange={onChangeHandler} /><br />
                <input type="submit" name='submit' />
            </form>
        </div>
    )
}
