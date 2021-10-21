import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router';
import Wrapper from './wrapper';

const AddTimeSlot = () => {

    const [lec, setlec] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [redirect, setRedirect] = useState(false);
    

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();
        //console.log(name, indexNo, eMail, grade, batchNo, profilePic);
        await fetch('http://localhost:8001/api/time',{
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                lec, 
                date, 
                time
            })
        });

        setRedirect(true);
    }


    if(redirect){
        return <Redirect to={'/admin/students'}/>
    }
    return (

        <Wrapper>
            <br />
            <form Style="margin-left: 300px;" onSubmit={submit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Lecture</label>
                    <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Lecture"
                        onChange={e => setlec(e.target.value)}
                    />

                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Index No</label>
                    <input type="time" class="form-control" id="index_no" name="index_no" aria-describedby="emailHelp" placeholder="Enter Index No"
                        onChange={e => setTime(e.target.value)} />

                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="date" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={e => setDate(e.target.value)} />

                </div>
                <br />

                <button type="submit" class="btn btn-secondary">Add Time Slote</button>
            </form>
        </Wrapper>


    );
};

export default AddTimeSlot;
