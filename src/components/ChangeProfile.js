import { useState } from "react";
// by passing useContext we can use it in home and do the same thing were we dont have to pass the props.username 
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = (props) => {
    const {setUsername} = useContext(AppContext)


    const [newUsername, setNewUsername] = useState("")
    return (
        <div>
            <input onChange={(event) =>{
                setNewUsername(event.target.value);
            }} />
            <button onClick={() => {
                setUsername(newUsername)
            }}> Change Username</button>
        </div>
    )
}