
// by passing useContext we can use it in home and do the same thing were we dont have to pass the props.username 
import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query"
import Axios from "axios"


export const Home = () => {
    const { data } = useQuery(["cat"], () => {
      return  Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    // We are using the useContext and appContext from the app.js by inporting it we wont need props anymore
    const {username} = useContext(AppContext)
    return  (
      <div>
    <h1> This is the home page and user is {username}</h1> 

    <p>cat fact: {data.fact}</p>

    </div>
    )
};