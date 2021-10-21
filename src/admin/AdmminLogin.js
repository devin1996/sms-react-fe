import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router';


const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();
        //console.log(name, indexNo, eMail, grade, batchNo, profilePic);
        await fetch('http://localhost:8002/api/register',{
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });

        setRedirect(true);
    }


    if(redirect){
        return <Redirect to={'/admin/students'}/>
    }

    return (
        <div >
            <form className="form-signin" Style="margin-left: 310px;margin-right: 310px;margin-top: 210px;"  onSubmit={submit}>

            <h2 Style="text-align:center;">Student Attendance Management System</h2>
            <p Style="text-align:center;">Admin Login</p>
                <div className="form-label-group">
                <label for="inputEmail">Email address</label>
                <br/>
                    <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" required autofocus
                    onChange={e => setEmail(e.target.value)}/>
                   
                </div>

                <div className="form-label-group">
                <label for="inputPassword">Password</label>
                <br/>
                    <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                    />
                    
                </div>

        	    <br/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
               
            </form>

        </div>
    );
};

export default AdminLogin;
