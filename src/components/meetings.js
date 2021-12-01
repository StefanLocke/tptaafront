import React from 'react'

const Meetings = ({ meetings }) => {
    return (
        <div className={"Meetings"}>
            {meetings.map((meeting) => (
                <div className="card Meeting">
                    <div className="card-body">
                        <p className="card-title">Meeting {meeting.id}</p>
                        <p className="card-text">Organiser : [{meeting.organiser.id}]{meeting.organiser.name}</p>
                        <p className="card-subtitle">E-mail : {meeting.organiser.email}</p>
                        <p className="card-text">Student : [{meeting.student==null?"None":meeting.student.id}]{meeting.student==null?"None":meeting.student.name}</p>
                        <p className="card-subtitle">E-mail : {meeting.student==null?"None":meeting.student.email}</p>
                        <p className="card-text">Start : {new Date(meeting.startTime).getHours()}:{new Date(meeting.startTime).getMinutes()}</p>
                        <p className="card-text">End : {new Date(meeting.endTime).getHours()}:{new Date(meeting.endTime).getMinutes()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Meetings