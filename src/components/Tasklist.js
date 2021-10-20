import React, { useState } from 'react'
import Navbar from './Navbar';

function Tasklist() {

    const datauser = JSON.parse(localStorage.getItem("customerdata"));
    console.log(datauser);
    const [userlistdata, setuserlistdata] = useState(datauser);
    console.log("===", userlistdata);

    return (
        <>
        <Navbar />
            <div className="container tasklist">
                <div className="row">
                    <h4 className="text-center text-capitalize text-white p-2 bg-warning my-2">User List</h4>
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="text-primary">
                                    <th scope="col">index</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">D-O-B</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userlistdata.map((user, index) => (
                                        <tr key={index} className="text-white">
                                            <td>{index}</td>
                                            <td>{user.username}</td>
                                            <td>{user.dob}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.state}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasklist
