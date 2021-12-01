import React from 'react'
import {Link, useParams} from "react-router-dom";





function UserUpdater(){
    let params = useParams()
    return <UserUpdaterComponent userId={params.id} />
}

class UserUpdaterComponent extends React.Component {


    clicked() {
       fetch("http://localhost:8080/user/update?id=" + this.updateId + "&email=" + this.updateEmail + "&name=" + this.updateName)
            .then(() => {

            })
            .catch(console.log);
    }


    updateId = this.props.userId;
    updateName;
    updateEmail;

    render() {
        return (
            <div className={"App UserUpdater"}>
                <Link to={"/dashboard/" + this.props.userId}>Back</Link>
                <h3>Update your profile (User : {this.updateId})</h3>
                <div>Name : <input onChange={(evt) => {
                    this.updateName = evt.target.value
                }}/></div>
                <div>Email : <input onChange={(evt) => {
                    this.updateEmail = evt.target.value
                }}/></div>
                <div>
                    <button onClick={() => this.clicked()}>Update</button>
                </div>
            </div>

        );
    }
}

export default UserUpdater;