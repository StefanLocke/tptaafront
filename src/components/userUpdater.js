import React from 'react'

const UserUpdater = ({user,onUpdate}) => {


    function onUpdate() {

       /* fetch("http://localhost:8080/user/update?id=" + this.updateId + "&email=" + this.updateEmail + "&name=" + this.updateName)
            .then(() => {
                onUpdate()
            })
            .catch(console.log);*/
        console.log("Want to update")
    }


    let updateId = user;
    let updateName;
    let updateEmail;


    return (
        <div className={"UserUpdater"}>
            <h3>Update your profile (User : {updateId})</h3>
            <div>Name : <input onChange={(evt) => {updateName = evt.target.value}}/></div>
            <div>Email : <input onChange={(evt) => {updateEmail = evt.target.value}}/></div>
            <div><button onClick={()=>onUpdate()}>Update</button></div>
        </div>

    );
}

export default UserUpdater;