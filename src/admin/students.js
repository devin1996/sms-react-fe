import React, { useEffect, useState } from 'react';
import Wrapper from './wrapper';
import { Studentz } from '../interfaces/studentz';
import { Link } from 'react-router-dom';

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

    const del = async (id: number) => {
        if (window.confirm('Confirm before removing this student' + id)) {
            await fetch('http://localhost:8000/api/students/' + id, {
                method: 'DELETE'
            });

            setStudents(students.filter(
                (s: Studentz) => s.id !== id));
        }
    }

    return (
        <Wrapper><div>



            <div className="table-responsive" Style="margin-left: 310px;">

                <div className="pt-3 pb-2 mb-3 border-bottom" Style="float:centre;">
                    <Link to='/admin/students/createuser' className="btn btn-dark">Add New Student</Link>
                </div>
                <div className="pt-3 pb-2 mb-3 border-bottom" Style="float:centre;">
                    <Link to='/admin/students/createuser' className="btn btn-dark">Admin Settings   </Link>
                </div>
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
                            <th>Edit User</th>
                            <th>Delete User</th>

                        </tr>
                    </thead>
                    <tbody>
                        {students.map(
                            (p: Studentz) => {
                                return (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td><img src={p.image} height="80" /></td>
                                        <td>{p.indexNo}</td>
                                        <td>{p.name}</td>
                                        <td>{p.email}</td>
                                        <td>{p.grade}</td>
                                        <td>{p.batchno}</td>
                                        <td>{p.isDisabled.toString()}</td>
                                        <td>
                                            <div className="btn-group mr-2">
                                                <Link to={'/admin/students/' + p.id + '/update'} className="btn btn-sm btn-outline-secondary"
                                                >Edit</Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="btn-group mr-2">
                                                <a href="#" className="btn btn-sm btn-outline-danger"
                                                    onClick={() => del(p.id)}
                                                >Delete</a>
                                            </div>
                                        </td>
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
