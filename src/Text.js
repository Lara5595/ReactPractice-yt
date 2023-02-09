import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        console.log("Component Mounted");
    })

    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }} />
            <h1>{text}</h1>
        </div>
    )
}


// stayed on 2:18:45