import React, {useState} from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Form from "./Form";
import LogInButton from "./LogInButton";
import Projects from "./Projects";
import NewRoom from "./NewRoom"
import "./Home.css"
import "./NavBar.css"
import "./Logo.css"


export default function Home(props){
  let [headerChange, setHeaderChange] = useState(props.click)

    const headerChangeHandler = () => {
        setHeaderChange()
        console.log(headerChange)
    }
    return (
        <div className="main-home">
            <div>
               <Logo/>
            </div>
            
            <section> 
                <NavBar/>
            </section>

            <br></br>

            {/* insert image here*/}
            <div className="main-p">
                <p>This is the beggining of the blog career of mine or perosnal project idk yet</p>
            </div>

            <section>
                <div>
                     <Form/> 
                </div>
            </section>
       
            <p onClick={headerChangeHandler}>{headerChange ? "click on this it will change" : "oh wow that was cool"} </p>
                {/* after it renders to "oh wow thats cool" how do i get it back to the original once i click again */}
                {/* idea: create a form. when i click on the title above the form it renders a new form that matches the title */}
            <br></br>

            <section>
                <Projects/>
            </section>
  
            <div>
                <LogInButton />
            </div>
        </div>
    )
}

