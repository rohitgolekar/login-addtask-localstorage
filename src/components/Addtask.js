import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar';

function Addtask() {
    let history = useHistory();
    const [customerdata, setcustomerdata] = useState({
        username: "",
        image: "",
        dob: "",
        gender: "",
        phone: "",
        state: ""
    });

    const handleChange = (e) => {
        setcustomerdata({ ...customerdata, [e.target.name]: e.target.value })
    }

    const submitForm = () => {

        var oldItems = JSON.parse(localStorage.getItem('customerdata')) || [];

        var newItem = {
            'username': customerdata.username,
            'image': customerdata.image,
            'dob': customerdata.dob,
            'gender': customerdata.gender,
            'phone': customerdata.phone,
            'state': customerdata.state,
        };

        oldItems.push(newItem);
        if (customerdata.username !== "", customerdata.image !== "", customerdata.dob !== "", customerdata.gender !== "", customerdata.phone !== "", customerdata.state !== "") {
            localStorage.setItem('customerdata', JSON.stringify(oldItems));
            //   console.log(userData)
            history.push("/tasklist");
        } else {
            alert("Please Fill All Fields");
        }

    }
    return (
        <>
        <Navbar />
            <div className="container Addtask">
                <div className="row">
                    <h4 className="text-center text-capitalize text-white p-2 bg-warning my-2">User Data</h4>
                    <form className="my-2">
                        <div className="col-md-4">
                            <div className="form-group my-2">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" type="text" onChange={handleChange} name="username" id="username" placeholder="Please Enter Username" autoComplete="off" />
                            </div>
                            <div className="form-group  my-2">
                                <label htmlFor="image">User Image</label>
                                <input className="form-control" type="file" onChange={handleChange} name="image" id="image" autoComplete="off" />
                            </div>

                            <div className="form-group  my-2">
                                <label htmlFor="dob">DOB</label>
                                <input className="form-control" type="date" onChange={handleChange} name="dob" id="dob" autoComplete="off" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group my-2">
                                <label htmlFor="gender">Gender</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="gender" id="gender">
                                    <option defaultValue="select gender">Please Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group  my-2">
                                <label htmlFor="phone">Phone</label>
                                <input className="form-control" type="text" onChange={handleChange} name="phone" id="phone" placeholder="Please Enter Phone Number" autoComplete="off" />
                            </div>

                            <div className="form-group  my-2">
                                <label htmlFor="state">State</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="state" id="state">
                                    <option defaultValue="select state">Please Select state</option>
                                    <option value="maharashtra">Maharashtra</option>
                                    <option value="punjab">Punjab</option>
                                    <option value="goa">Goa</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group my-2">
                            <button className="btn btn-success my-2 mx-2" onClick={submitForm}>Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addtask
