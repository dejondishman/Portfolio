import React, { useState } from "react";

export default function Form(props){
    //state is data that the component stores
    //usually wehn our state is updated the compnent rerenders// most likely changing the interface
    const [enteredName, setEnteredName] = useState(props.name)
    const [entredNumber, setEnteredNumber] = useState(props.number)
    const [enteredCheckIn, setEnteredCheckIn] = useState(props.date)    
    const [enteredCheckOut, setEnteredCheckOut] = useState(props.date)
    const [enteredAdults, setEnteredAdults] = useState(props.people)
    const [enteredChildren, setEnteredChildren] = useState(props.people)

    const nameChangeHandler = (event) => {
        console.log("EEEEEEEEEE",event)
        
        setEnteredName(event.target.value);
    }
    const numberChangeHandler = (event) => {
        setEnteredNumber(event.target.value)
    }
    const checkInChangeHandler = (event) => {
        setEnteredCheckIn(event.target.vaue)
    }
    const checkOutChangeHandler = (event) => {
        setEnteredCheckOut(event.target.name)
    }
    const adultsChangeHandler = (event) => {
        setEnteredAdults(event.target.value)
    }

    const childrenChangeHandler = (event) => {
        setEnteredChildren(event.target.value) 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //creating an object that holds all the (forms data/ user input data) from the form 
        //we can (use this data in a new component) specifically our (NewRoom) component 
        const formSubmissionData = {
            name: enteredName,
            number: entredNumber,
            checkIn: new Date(enteredCheckIn),
            checkOut: new Date(enteredCheckOut),
            adults: enteredAdults,
            children: enteredChildren

        }
        props.saveNewRoomDataHandler(formSubmissionData);
        //clearing each input after the submission 
        setEnteredName('');
        setEnteredNumber('');
        setEnteredCheckIn('');
        setEnteredCheckOut('');
        setEnteredAdults('');
        setEnteredChildren('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={enteredName} onChange={nameChangeHandler}></input>
                <label>Number</label>
                <input type="number" value={entredNumber}  onChange={numberChangeHandler}></input>
                <label>Check-in</label>
                <input type="date" value={enteredCheckIn}  onChange={checkInChangeHandler}></input>
                <label>Check-out</label>
                <input type="date" value={enteredCheckOut}  onChange={checkOutChangeHandler}></input>
                <label>Adults</label>
                <input type="number" value={enteredAdults}  onChange={adultsChangeHandler}></input>
                <label>Children</label>
                <input type="number" min= "2019-01-01" max="2022-12-31"  value={enteredChildren} onChange={childrenChangeHandler}></input>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}