import React, {useState} from 'react'
import Navbar from './Navbar';

function Profile() {
    const getUserinfo = JSON.parse(localStorage.getItem("userdata"));
    console.log(getUserinfo);

    const [state, setState] = useState(getUserinfo);

    const handleChange = (e) => {
        // debugger;
        setState({...state, [e.target.name]:e.target.value});
    }

    const updateUser = () => {
        debugger;
       localStorage.setItem("userdata", JSON.stringify(state));
       alert("User Updated Successfully");
    }
    return (
        <>
        <Navbar />
            <div className="container my-5 registration">
                <div className="row py-5">
                    <form>
                        <div className="col-md-4 mx-auto">

                            <h4 className="text-center text-capitalize text-warning p-2 bg-danger my-2">User Details</h4>
                            <div className="form-group">
                                <label htmlFor="username">username</label>
                                <input className="form-control" type="text" onChange={handleChange} value={state.username} name="username" id="username" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input className="form-control" type="text" onChange={handleChange} value={state.email} name="email" id="email" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">phone</label>
                                <input className="form-control" type="text" onChange={handleChange} value={state.phone} name="phone" id="phone" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input className="form-control" type="password" onChange={handleChange} value={state.password} name="password" id="password" autoComplete="off" />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-success btn-sm my-2" onClick={updateUser}>Update User</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile
