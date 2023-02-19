import { ChangeProfile } from "../components/ChangeProfile";
// by passing useContext we can use it in home and do the same thing were we dont have to pass the props.username 
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
        // We are using the useContext and appContext from the app.js by inporting it we wont need props anymore
        const {username} = useContext(AppContext)
    return (
        <div>
            {" "}
            PROFILE, user is : {username}
            {/* <ChangeProfile setUsername={props.setUsername} /> */}
        </div>
    )
};