import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import Meetings from "./meetings";
import UserUpdater from "./userUpdater";

function Dashboard() {
    let params = useParams()
    return <DashboardComponent userId={params.id} />
}

class DashboardComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getMeetings = this.getMeetings.bind(this)
        this.getUser = this.getUser.bind(this)
        this.newMeeting = this.newMeeting.bind(this)
        this.joinMeeting = this.joinMeeting.bind(this)
        this.leaveMeeting = this.leaveMeeting.bind(this)
        this.deleteMeeting = this.deleteMeeting.bind(this)
    }

    state = {
        meetings: [],
        user : {}
    }




    componentDidMount() {
        this.getMeetings()
        this.getUser()

    }

    getUser() {
        fetch("http://localhost:8080/user/get?id="+this.props.userId)
            .then(res => res.json())
            .then((data) => {
                this.setState({user: data})
            })
            .catch(console.log)
    }

    getMeetings() {
        fetch("http://localhost:8080/meeting/all")
            .then(res => res.json())
            .then((data) => {
                this.setState({meetings: data})
            })
            .catch(console.log)
    }

    newStart = "2018-05-05T11:50:55"
    newEnd = "2018-05-05T11:50:55"

    newMeeting() {
        fetch("http://localhost:8080/meeting/create?userId=" + this.props.userId+"&startTime="+this.newStart+"&endTime="+this.newEnd)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
    }

    joinMeetingId = ""

    joinMeeting() {
        fetch("http://localhost:8080/meeting/join?meetingId=" + this.joinMeetingId + "&userId=" + this.props.userId)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
    }

    leaveMeetingId = ""

    leaveMeeting() {
        fetch("http://localhost:8080/meeting/leave?meetingId=" + this.leaveMeetingId + "&userId=" + this.props.userId)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
    }

    deleteId = ""

    deleteMeeting() {
        fetch("http://localhost:8080/meeting/delete?meetingId=" + this.deleteId)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
    };





    render() {


        return (
            <div className="App">
                <header>
                    <h1>Hello {this.state.user.name}</h1>
                    <nav>
                        <Link style={{ textDecoration: 'none' }} to={"/dashboard/"+this.props.userId+"/update"}>Update profile</Link> -
                        <Link to={"/"}> Logout</Link>
                    </nav>
                </header>
                <div className={"ButtonBar"}>
                    <div className={"Button-area"}>
                        <button onClick={this.newMeeting}>Add new meeting</button>
                    </div>
                    <div className={"Button-area"}>
                        <button onClick={this.joinMeeting}>Join meeting</button>
                        Meeting Id<input onChange={evt => this.joinMeetingId = evt.target.value}/>
                    </div>
                    <div className={"Button-area"}>
                        <button onClick={this.leaveMeeting}>Leave meeting</button>
                        Meeting Id<input onChange={evt => this.leaveMeetingId = evt.target.value}/>
                    </div>
                    <div className={"Button-area"}>
                        <button onClick={this.deleteMeeting}>Remove meeting</button>
                        Meeting Id<input onChange={evt => this.deleteId = evt.target.value}/>
                    </div>
                </div>
                <Meetings meetings={this.state.meetings}/>
            </div>
        );
    }

}


export default Dashboard;
