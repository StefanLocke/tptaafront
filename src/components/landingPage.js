import React from "react";
import {Link} from "react-router-dom";
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

    removeAllUsers() {

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
                <header>
                    <nav>
                        <Link to={"/dashboard"}>Login</Link>
                    </nav>
                </header>
                <div><center><h1>User list</h1></center></div>
                <div className={"ButtonBar"}>
                    <div className={"Button"}>
                        <button onClick={this.createNewUser}>Add new user</button>
                    </div>
                    <div className={"Button"}>
                        <button onClick={this.updateUser}>Update user</button>
                        id<input onChange={evt => this.updateId = evt.target.value}/>name<input
                        onChange={evt => this.updateName = evt.target.value}/>email<input
                        onChange={evt => this.updateEmail = evt.target.value}/></div>
                    <div className={"Button"}>
                        <button onClick={this.removeUser}>Remove user</button>
                        id<input onChange={evt => this.removeId = evt.target.value}/></div>
                </div>
                <div>
                   <UserList />
                </div>
            </div>
        );
    }


}

function getUsers(){
    return fetch("http://localhost:8080/user/all")
}

class UserList extends React.Component {

    state = {
        users : []
    }


    componentDidMount() {
        getUsers()
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data})
            })
            .catch(console.log);
    }

    render() {
        return (
            <Users users={this.state.users}/>
        );
    }
}

export default LandingPage;