import React from "react";

import Users from "./users";





class LandingPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getUsers = this.getUsers.bind(this)
        this.createNewUser = this.createNewUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.removeUser = this.removeUser.bind(this)
    }

    state = {
        users: []
    }

    updateId = ""
    updateName = ""
    updateEmail = ""

    removeId = ""

    componentDidMount() {
        this.getUsers()
    }

    createNewUser() {
        fetch("http://localhost:8080/user/create")
            .then(() => {
                this.getUsers()
            })
            .catch(console.log);

    }

    updateUser() {
        fetch("http://localhost:8080/user/update?id=" + this.updateId + "&email=" + this.updateEmail + "&name=" + this.updateName)
            .then(() => {
                this.getUsers()
            })
            .catch(console.log);
        console.log("user " + this.updateId + " takes " + this.updateName + " and " + this.updateEmail)
    }

    removeUser() {
        fetch("http://localhost:8080/user/delete?id=" + this.removeId)
            .then(() => {
                this.getUsers()
            })
            .catch(console.log);
        console.log("user " + this.removeId + " to remove")
    }


    getUsers() {
        fetch("http://localhost:8080/user/all")
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data})
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className="App">
                <div><center><h1>User list</h1></center></div>
                <div className={"ButtonBar"}>
                    <div className={"Button-area"}>
                        <button onClick={this.createNewUser}>Add new user</button>
                    </div>
                    <div className={"Button-area"}>
                        <button onClick={this.removeUser}>Remove user</button>
                        id<input onChange={evt => this.removeId = evt.target.value}/></div>
                </div>
                <div>
                   <Users users={this.state.users} onDelete={this.removeUser}/>
                </div>
            </div>
        );
    }


}


export default LandingPage;