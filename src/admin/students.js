import React, { useEffect, useState } from 'react';
import Wrapper from './wrapper';
import { Studentz } from '../interfaces/studentz';

const Students = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/students');

                const data = await response.json();

                console.log(data);
                setStudents(data);
            }
        )();
    }, []);

    return (
        <Wrapper><div>

            <h2>Section title</h2>
            <div className="table-responsive" Style="float:right;">
                <table className="table table-striped table-sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>indexNo</th>
                            <th>name</th>
                            <th>email</th>
                            <th>grade</th>
                            <th>batchno</th>
                            <th>isDisabled</th>
                                
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(
                            (p: Studentz) => {
                                return (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td><img src={p.image} height="180"/></td>
                                        <td>{p.indexNo}</td>
                                        <td>{p.name}</td>
                                        <td>{p.email}</td>
                                        <td>{p.grade}</td>
                                        <td>{p.batchno}</td>
                                        <td>{p.isDisabled}</td>
                                    </tr>
                                )
                            }   
                        )}
                    </tbody>
                </table>
            </div>
        </div></Wrapper>

    );
};

export default Students;
