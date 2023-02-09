import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";


export const NameApi = () => {

    const [name, setName] = useState("");

    const [predictedAge, setPredictedAge] = useState(null)

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(res.data);
            setPredictedAge(res.data)
        })
    }

    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." onChange={(event) => {setName(event.target.value)}} />
            <button onClick={fetchData}>Predict Age</button>
            {/* by putting the question mark it lets you get the age name and count from the data */}
            <h1>Name: {predictedAge?.name}</h1>
            <h1>Predicted Age: {predictedAge?.age}</h1>
            <h1>Count: {predictedAge?.count}</h1>

        </div>

    )

}

