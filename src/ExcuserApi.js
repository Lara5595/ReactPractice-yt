import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

// https://excuser.herokuapp.com/v1/excuse/  api does not work anymore

export const ExcuserApi = () => {
const [generatedExcuse, setGeneratedExcuse] = useState("");

const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
        setGeneratedExcuse(res.data[0].excuse)
        console.log(res.data);
    })
};



return (
<div className="App">
    <h1>Generate An Excuse </h1>
    {/* We are passing the function fetchExcuse with the parameter excuse which changes when we put something */}
    <button onClick={() => fetchExcuse("party")}> Party</button>
    <button onClick={() => fetchExcuse("family")}> Family</button>
    <button onClick={() => fetchExcuse("office")}> Office</button>


    <p>{generatedExcuse}</p>

</div>

)


}