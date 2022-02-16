import React, {useState} from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Form from "./Form";
import LogInButton from "./LogInButton";
//import {Link} from "react-router-dom";

export default function Home(props){
  let [headerChange, setHeaderChange] = useState(props.click)


    

    const headerChangeHandler = () => {
        setHeaderChange()
        console.log(headerChange)
    }
    return (
        <div>
            <div>
                <Logo/>
            </div>
            
            <section> 
                <p>this is my nav bar below</p> 
               <NavBar/>
            </section>
            
            <div>
                <p>THis is the beggining of the blog career of mine or perosnal prject idk yet</p>
            </div>

            <section>
                <div>
                    {/* <Form/> */}
                </div>
            </section>
            
           
            
            <p onClick={headerChangeHandler}>{headerChange ? "click on this it will change" : "oh wow that was cool"} </p>
                {/* after it renders to "oh wow thats cool" how do i get it back to the original once i click again */}
                {/* idea: create a form. when i click on the title above the form it renders a new form that matches the title */}

            <section>
                <p>Projects</p>
                <ul>
                    <li>Pomodoro Timer</li>
                    <li>Restaurant Reservation</li>
                    <li>Grub Dash</li>
                </ul>
            </section>

            <div>
                <LogInButton />
            </div>
        </div>
    )
}