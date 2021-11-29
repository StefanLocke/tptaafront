import React from 'react'
import {Link} from "react-router-dom";

const Users = ({ users }) => {
    return (
        <div>

            <div className={"Users"}>
                {users.map((user) => (
                    <Link to={"/dashboard/"+user.id}>
                        <div className="card User" >
                            <div className="card-body">
                                <h5 className="card-title">Name : {user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Id = {user.id}</h6>
                                <p className="card-text">This is a User</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Users