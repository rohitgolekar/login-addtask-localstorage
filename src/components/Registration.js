import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function Registration() {

    const history = useHistory();
    const [state, setState] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const formsubmit = (e) => {
        e.preventDefault();
        if (state.username !== "" && state.email !== "" && state.phone !== "" & state.password !== "") {

            localStorage.setItem("userdata", JSON.stringify(state));
            alert("User Registered successfully");
            history.push("/");
        } else {
            alert("Please Fill All the Fields");
        }
    }

    const resetForm = () => {
        setState({ username: "", email: "", phone: "", password: "" })
    }

    return (
        <>
            <div className="container my-5 registration">
                <div className="row py-5">
                    <form>
                        <div className="col-md-4 mx-auto">

                            <h4 className="text-center text-capitalize text-warning p-2 bg-danger my-2">Sign Up</h4>
                            <div className="form-group">
                                <label htmlFor="username">username</label>
                                <input className="form-control" type="text" onChange={handleChange} name="username" id="username" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input className="form-control" type="text" onChange={handleChange} name="email" id="email" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">phone</label>
                                <input className="form-control" type="text" onChange={handleChange} name="phone" id="phone" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input className="form-control" type="password" onChange={handleChange} name="password" id="password" autoComplete="off" />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-success btn-sm my-2" onClick={formsubmit}>Registration</button>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-danger btn-sm my-2" type="reset" onClick={resetForm}>Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Registration
