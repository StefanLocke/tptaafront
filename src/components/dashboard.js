import React from "react";
import {Link, useParams} from "react-router-dom";
import Meetings from "./meetings";
import UserUpdater from "./userUpdater";
import App from "../App";


class Dashboard extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getMeetings = this.getMeetings.bind(this)
        this.newMeeting = this.newMeeting.bind(this)
        this.joinMeeting = this.joinMeeting.bind(this)
        this.leaveMeeting = this.leaveMeeting.bind(this)
        this.deleteMeeting = this.deleteMeeting.bind(this)
    }

    state = {
        meetings: [],
        thing : this.props.match.params.id
    }


    componentDidMount() {
        this.getMeetings()
    }


    getMeetings() {
        fetch("http://localhost:8080/meeting/all")
            .then(res => res.json())
            .then((data) => {
                this.setState({meetings: data})
            })
            .catch(console.log)
    }

    newId = ""
    newStart = ""
    newEnd = ""

    newMeeting() {
        fetch("http://localhost:8080/meeting/create?userId="+this.newId)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
    }

    joinMeetingId = ""
    joinUserId = ""

    joinMeeting() {
        fetch("http://localhost:8080/meeting/join?meetingId="+this.joinMeetingId + "&userId="+this.joinUserId)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
        console.log("user " + this.joinUserId + " meeting "+ this.joinMeetingId )
    }

    leaveMeetingId = ""
    leaveUserId = ""
    leaveMeeting() {
        fetch("http://localhost:8080/meeting/leave?meetingId="+this.leaveMeetingId + "&userId="+this.leaveUserId)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
    }

    deleteId = ""

    deleteMeeting() {
        fetch("http://localhost:8080/meeting/delete?meetingId="+this.deleteId)
            .then(() => {
                this.getMeetings()
            })
            .catch(console.log);
    };


    render() {


        return (
            <div className="App">
                <header>
                    <nav>
                        <Link to={"/"}>Logout</Link>
                    </nav>
                </header>
                <div className={"ButtonBar"}>
                    <div className={"Button"}>
                        <button onClick={this.newMeeting}>Add new meeting</button>
                        Organiser Id<input onChange={evt => this.newId = evt.target.value}/></div>
                    <div className={"Button"}>
                        <button onClick={this.joinMeeting}>Join meeting</button>
                        Meeting Id<input onChange={evt => this.joinMeetingId = evt.target.value}/>User Id<input onChange={evt => this.joinUserId = evt.target.value}/></div>
                    <div className={"Button"}>
                        <button onClick={this.leaveMeeting}>Leave meeting</button>
                        Meeting Id<input onChange={evt => this.leaveMeetingId = evt.target.value}/>User Id<input onChange={evt => this.leaveUserId = evt.target.value}/></div>
                    <div className={"Button"}>
                        <button onClick={this.deleteMeeting}>Remove meeting</button>
                        Meeting Id<input onChange={evt => this.deleteId = evt.target.value}/></div>
                </div>
                <Meetings meetings={this.state.meetings}/>
                <UserUpdater  onUpdate={this.render}/>
            </div>
        );
    }

}

class MeetingList extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Dashboard;
