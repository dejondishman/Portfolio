import React from "react";

import Form from "./Form";

const NewRoom = () => {
    const saveNewRoomDataHandler = (enteredNewRoomData) => {
        const formSubmissionData = {
            //pull aout all key value pairs and add them to enteredNewRoomData object 
                ...enteredNewRoomData,
                id: Math.random().toString()
        }
        console.log("NEWROOMDATA",formSubmissionData);
    }
    return(
        <div>
            <Form onSaveNewRoomData={saveNewRoomDataHandler}/>
        </div>
        
    )
}
cd 
export default  NewRoom