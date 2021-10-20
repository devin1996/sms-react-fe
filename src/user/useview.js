import React, { useEffect, useState } from 'react';
import { Studentz } from '../interfaces/studentz';

const UserVIew = () => {

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
    <div>


      <main role="main">

        <div class="album py-5 bg-light">
          <div class="container">

            <div class="row">

              {students.map(
                (p: Studentz) => {
                  return (


                    <div class="col-md-4" key={p.id}>
                      <div class="card mb-4 shadow-sm">
                      <img src={p.image} height="180" />
                        <div class="card-body">
                          <p class="card-text">{p.name}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            {/* <div class="btn-group">
                              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div> */}
                            <small class="text-muted">{p.email}</small>
                            <small class="text-muted">{p.indexNo}</small>
                            <small class="text-muted">{p.batchno}</small>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              )}

      </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default UserVIew;
