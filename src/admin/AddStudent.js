import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router';
import Wrapper from './wrapper';

const AddStudent = () => {

    const [name, setName] = useState('');
    const [indexNo, setindexNo] = useState('');
    const [eMail, seteMail] = useState('');
    const [grade, setgrade] = useState('');
    const [batchno, setbatchNo] = useState('');
    const [image, setprofilePic] = useState('');
    const [redirect, setRedirect] = useState(false);
    

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();
        //console.log(name, indexNo, eMail, grade, batchNo, profilePic);
        await fetch('http://localhost:8000/api/students',{
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name, 
                indexNo, 
                eMail, 
                grade, 
                batchno,
                image
            })
        });

        setRedirect(true)
    }


    if(redirect){
        return <Redirect to={'/admin/students'}/>
    }
    return (

        <Wrapper>
            <br />
            <form Style="margin-left: 300px;" onSubmit={submit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Name"
                        onChange={e => setName(e.target.value)}
                    />

                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Index No</label>
                    <input type="text" class="form-control" id="index_no" name="index_no" aria-describedby="emailHelp" placeholder="Enter Index No"
                        onChange={e => setindexNo(e.target.value)} />

                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={e => seteMail(e.target.value)} />

                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Grade</label>
                    <input type="text" class="form-control" id="grade" name="grade" aria-describedby="emailHelp" placeholder="Enter Grade"
                        onChange={e => setgrade(e.target.value)} />

                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Batch No</label>
                    <input type="text" class="form-control" id="batch_no" name="batch_no" aria-describedby="emailHelp" placeholder="Enter Batch"
                        onChange={e => setbatchNo(e.target.value)} />

                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Profile Picture</label>
                    <input type="text" class="form-control" id="profilepic" name="profilepic" aria-describedby="emailHelp" placeholder="Enter Profile Picture link"
                        onChange={e => setprofilePic(e.target.value)} />

                </div>
                <br />
                <br />

                <button type="submit" class="btn btn-secondary">Regiter</button>
            </form>
        </Wrapper>


    );
};

export default AddStudent;
