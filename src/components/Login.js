import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css';

function Login() {

    let history = useHistory();

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitform = (e) => {
        // debugger;
        e.preventDefault();
        var comment = JSON.parse(localStorage.getItem('userdata'));
        console.log("comment retrieve : ", comment);
        if (comment != null) {
            if (data.email !== "" && data.password !== "") {
                if (comment.email === data.email && comment.password === data.password) {
                    alert("logged in successfully");
                    history.push("/addtask");
                } else {
                    alert("Enter correct email and password");
                    // history.push("/registration");
                }
            } else {
                alert("Please Fill All Fields");
            }

        } else {
            alert("Please Register");
            history.push("/registration");
        }
    }

    const resetForm = () => {
        setData({ email: "", password: "" })
    }
    return (
        <>
            <div className="container login">
                <div className="row py-5">
                    <form >
                        <div className="col-md-4 mx-auto">
                            <h4 className="text-center text-capitalize text-warning p-2 bg-danger my-2">Sign In</h4>
                            <div className="form-group my-2">
                                <label htmlFor="email">email</label>
                                <input className="form-control" type="text" onChange={handleChange} name="email" id="email" autoComplete="off" placeholder="Email" />
                            </div>
                            <div className="form-group  my-2">
                                <label htmlFor="password">password</label>
                                <input className="form-control" type="password" onChange={handleChange} name="password" id="password" autoComplete="off" placeholder="Password" />
                            </div>

                            <div className="form-group my-2">
                                <button className="btn btn-success btn-sm my-2 mx-2" onClick={submitform}>Sign In</button>

                                <Link className="mx-2 text-decoration-none" to="/registration">Sign Up</Link>
                                <button className="btn btn-danger btn-sm my-2 mx-2" type="reset" onClick={resetForm}>Reset</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
