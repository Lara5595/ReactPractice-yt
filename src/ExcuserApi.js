import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

// https://excuser.herokuapp.com/v1/excuse/

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
    <button> Party</button>
    <button> Family</button>
    <button> Office</button>

    <p>{generatedExcuse}</p>

</div>

)


}