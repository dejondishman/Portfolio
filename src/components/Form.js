import React, { useState } from "react";

export default function Form(props){
    const [name, setName] = useState(props.name)
    const [number, setNumber] = useState(props.number)
    const [checkIn, setCheckIn] = useState(props.date)
    const [checkOut, setCheckOut] = useState(props.date)
    const [adults, setAdults] = useState(props.people)
    const [children, setChildren] = useState(props.people)


    return(
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Number</label>
            <input type="integer"></input>
            <label>Check-in</label>
            <input type="date"></input>
            <label>Check-out</label>
            <input type="date"></input>
            <label>Adults</label>
            <input type="integer"></input>
            <label>Children</label>
            <input type="integer"></input>
        </form>
    )
}