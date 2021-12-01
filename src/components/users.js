import React from 'react'
import {Link} from "react-router-dom";

const Users = ({users,onDelete }) => {
    return (
        <div>
            <div className={"Users"}>
                {users.map((user) => (
                        <div className="card User" >
                            <div className="card-body">
                                <Link to={"/dashboard/"+user.id}>
                                <h5 className="card-title">Name : {user.name}</h5>
                                </Link>
                                <h6 className="card-subtitle mb-2 text-muted">Id = {user.id}</h6>
                                <p className="card-text">This is a User</p>
                                <button onClick={() => {onDelete(user.id)}}>Delete user</button>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
};

export default Users