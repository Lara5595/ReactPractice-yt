
// by passing useContext we can use it in home and do the same thing were we dont have to pass the props.username 
import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query"
import Axios from "axios"


export const Home = () => {
  // in the const you can use multiple uses like isLoading or isError and others
  // If you dont want to use data just by itself you can rename it 
    const { 
       data: catData,
       isLoading,
       isError,
       refetch } = useQuery(["cat"], () => {
      return  Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });


    // We are using the useContext and appContext from the app.js by inporting it we wont need props anymore
    const {username} = useContext(AppContext)


    if(isError){
      return <h1>Sorry there was a Error</h1>
    }

    if(isLoading) {
      return <h1>Is Loading....</h1>;
    }


    return  (
      <div>
    <h1> This is the home page and user is {username}</h1> 

      {/* by putting a ? it wont break when we refrash */}
    <p>cat fact: {catData?.fact}</p>
    <button onClick={refetch}>Update Data</button>

    </div>
    )
};