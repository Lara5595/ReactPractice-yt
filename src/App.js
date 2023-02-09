import './App.css';
// import Axios from "axios";
// import { Text } from './Text';

// react library
// import { useEffect, useState} from 'react';
import { NameApi } from './NameApi';

// import { User } from "./User"
// import Planets from './Planets';
// import {Planets} from './Planets'



function App() {

  return (
    <NameApi />

  )

}




// We need this so we can use it on other pages
export default App;













///////////////////////////////// Using Axios api //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function App() {

//   // this is how we get the api in js but there is another way and its with axios
//   // fetch("https://catfact.ninja/fact").then((res) => res.json())
//   // .then((data) => {
//   //   console.log(data);
//   // })

//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//       // Axios Api fetch
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       // console.log(res.data);
//       setCatFact(res.data.fact);
//     });
//   }

// // the useEffect helps it not be a infinite loop of facts
//   useEffect(() => {
//   // Axios Api fetch
//     fetchCatFact();
// }, []);

// return (
//   <div className='App'>
//     <button onClick={fetchCatFact}> Generate Cat Fact</button>
//     <p> {catFact} </p>
//     </div>

// );



// }


///////////////////////////////// End of using api ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ////////////



///////////////////////////////// Using events  with a js component with a event ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {


// function App() {

//   const [showText, setShowText] = useState(false);
 
//   return (
//    <div className='App'>
//  <button onClick={() => {
//    setShowText(!showText)
//  }}>
//    Show Text
//  </button>
 
//  {showText && <Text/>}
//      </div>
//   )
 
//  }
 
 








///////////////////////////////// End Using events  with a js component with a event ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {




///////////////////////////////// Using Events ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {


// function App() {
//   // this is part of the useState library  age is what we are naming our var
//     const [age, setAge] = useState(0)
//   // we are creating a var to use inside the onclick
//     const increaseAge = () => {
//       setAge(age + 1)
//     }

//     // this is to show the input value
//     const [inputValue, setInputValue] = useState("");

//     const handleInputChange = (event) => {
//       setInputValue(event.target.value);
//       // console.log(event.target.value);
//     }

//     return (
//     <div className='App'>
//       {age}
//       <button onClick={increaseAge}>Increase Age</button><br></br>
//       <input type="text" onChange={handleInputChange}/>
//       {inputValue}
//     </div>
//     )
//   }


/////////////  hiding text and changing the color

// function App() {
//   const [showText, setShowText] = useState(true)
//   const [textColor, setTextColor] = useState("black")

//   return (
//     <div className='App'>
//       {/* We are doing a inline function */}
//       <button
//        onClick={() => {
//         setShowText(!showText)
//        }}>Show/Hide</button>
//       {/* && is then */}
//       {showText === true && <h1>Hi my name is David</h1>}
//        <br>
//       </br>
//       <div>
//        <h1 style={{color: textColor}}>Change my color by click button</h1>
//        <button onClick={() => {
//         setTextColor(textColor === "black" ? "red" : "black")
//        }}>Click me for color</button>
//       </div>

//     </div>

//   )

// }




// setting numbers increase decrese and zero

// function App() {

//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1)
//   }

//   const decreaseCount = () => {
//     setCount(count - 1)
//   }

//   const setToZero = () => {
//     setCount(0)
//   }

//   return (
//     <div className='App'>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//       <button onClick={setToZero}>Set to Zero</button>
//       {count}
//       </div>
//   )

// }



//////////////////////////////////// END OF Using a component with .map ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {









///////////////////////////////// Using a component with .map ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {


// function App() {
//   const users = [
//     {name: "David", age: 27},
//     {name: "Lessly", age: 24},
//     {name: "Luca", age: 0},
  
//   ];
  
//   return (
//     <div className='App'>
//       {users.map((user, key) => {
//         return <User name= {user.name} age ={user.age}/>
//       })}
//     </div>
//   );
//     }
  
  
//   const User = (props) => {
//     return (
//       <div>
//         {props.name} Age: {props.age}
//       </div>
//     )
//   }




// This example uses planets.js 
// function App() {


//   return (
//     <div className='App'>
//       {Planets.map((planet, key) => {
//       if (planet.isGasPlanet) return <h1> {planet.name} is a Gas Planet</h1>
//       if (!planet.isGasPlanet) return <h1> {planet.name} is not a Gas Planet</h1>
//       })}
//     </div>
//   )




///////////////////////////////// End of Using a component with .map ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {



///////////////////////////////// Using .map with objects ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {


// function App() {
//   const users = [
//     {name: "David", age: 27},
//     {name: "Lessly", age: 24},
//     {name: "Luca", age: 0},
  
//   ];
  
//   return (
//     <div className='App'>
//       {users.map((user, key) => {
//         return (
//           <div>
//             {user.name}, Age:{user.age}
//             </div>
//         );
//       })}
//     </div>
//   );
  
//   } // end of App



///////////////////////////////// End of .map with objects ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {


///////////////////////////////// How to use a array and map to loop over ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {


// function App() {
//   const names = ["David", "Luca", "Lessly", "Hunter", "Simba"]
//   return (
//     // values are the names and key is the id
//     names.map((value, key) => {
//       return <h1 key ={key}> {value}</h1>
//     })
  
//   )
  
//   } // end of App

///////////////////////////////// End of How to use a array and map to loop over ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {


///////////////////////////////// How to use a if statement ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function App() {
//   const age = 18;
//   if (age >= 18){
//     return<h1>OVER AGE</h1>
//   } else  {
//     return <div className="App">UNDER AGE</div>
//   }
  // Anoter way to write AGE in ternary is 
  // {age >= 18 ? <h1> OVER AGE </h1> : <h1> UNDER AGE </h1>}



///////////////////////////////// End of how to use a if statement///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////How to use a component prop //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
// function App() {
//   // return (
//     // <div className="App"> 
//     {/* This is a example of how to use the job */}
//     // {/* <Job salary={90000} position="Senior SDE" company="Amazon" />
//     // <Job salary={12000} position="Junior SDE" company="Google" />
//     // <Job salary={10000} position="Senior SDE" company="Netflix" /> */}
//     // {/* </div> */}
//   // );

// } // end of App



// const Job = (props) => {
//   return (
//     <div>
//   <h1>{props.salary}</h1>
//   <h1>{props.position}</h1>
//   <h1>{props.company}</h1>
//   </div>
//   )
// }

///////////////////////////////// End of how to use component prop ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////