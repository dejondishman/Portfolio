import React, { useState } from "react";
import Card from "../UI/Card";


export default function Projects(){
    const [pomodoro, setPomodoro] = useState('')

    const PomodoroClickHandler = (event) => {
        setPomodoro(event.target.value)
    }
    return (
        <Card>
        <div>
                <p>Projects</p>
                <ul>
                    <Card>
                    <li onClick={PomodoroClickHandler}>Pomodoro Timer</li>
                    </Card>
                    <Card>
                    <li>Restaurant Reservation</li>
                    </Card>
                    <Card>
                    <li>Grub Dash</li>
                    </Card>
                    
                    
                    
                </ul>
            
        </div>
        </Card>
    )
}