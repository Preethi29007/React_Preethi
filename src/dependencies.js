import { useState, useEffect } from "react";

function TrafficLight() {
    const [light, setLight] = useState("red");

    useEffect(() => {
        alert(`The light is now ${light.toUpperCase()}`);
    }, [light]); // runs whenever light changes

    function red(){
        setLight("red");}

    function yellow(){
        setLight("yellow");}

    function green(){
        setLight("green");}

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Traffic Light</h2>
            <button onClick={red}>Red</button>
            <button onClick={yellow}>Yellow</button>
            <button onClick={green}>Green</button>
            <p>Current Light: <b style={{ color: light }}>{light}</b></p>
        </div>
    );
}

export default TrafficLight;