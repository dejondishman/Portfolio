import React, {useState} from "react";


function SuscribeButton(){
    const [ suscribed, setSuscribed] = useState(false)
    const [suscribedCount, setSuscribedCount] = useState(0)
    const [alerts, setAlerts] = useState(false)

    return(
        <section>
            <p>Please click to suscribe to my updates!</p>
            <p>Suscriber Count: {suscribedCount} </p>
    
            <button
            onClick={() => {
              setSuscribed(!suscribed);
              setSuscribedCount(setSuscribedCount + 1);
              if (!alerts) setAlerts(true);
            }}
          >
            {suscribed ? "Unsubscribe" : "Subscribe"}
          </button>
          
          <button onClick={() => setAlerts(!alerts)}>
            {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
          </button>
        </section>
    )
}

// When you click the Unsubscribe button (which is also the Subscribe button), the following happens:
        //The subscribed state is toggled.
        //The subscribedCount is increased by 1.
        //If the alerts are false, they are set to true.

