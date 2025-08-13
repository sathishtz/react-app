import React, {useState} from "react";

function Hook(){
    let [Car,setCar]=useState("Honda");

    return(
        <>
        <h2>My favorite Car is {Car}</h2>
        <button className="btn" type="Audi" onClick={()=>setCar("Audi")}>
            Click To View My Choice..!
        </button>
        </>
    );
}

export default Hook