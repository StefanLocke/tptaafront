import React from 'react'

const Meetings = ({ meetings }) => {
    return (
        <div>
            <center><h1>meeting List</h1></center>
            {meetings.map((meeting) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Meeting {meeting.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Organiser : {meeting.organiser.id} Student : {meeting.student==null?"None":meeting.student.id}</h6>
                        <p className="card-text">Start : {new Date(meeting.startTime).getHours()}:{new Date(meeting.startTime).getMinutes()} End : {new Date(meeting.endTime).getHours()}:{new Date(meeting.endTime).getMinutes()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Meetings