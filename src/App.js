import './App.css';

function App() {
const users = [
  {name: "David", age: 27},
  {name: "Lessly", age: 24},
  {name: "Luca", age: 0},

];

return (
  <div className='App'>
    {users.map((user, key) => {
      return (
        <div>
          {user.name} {user.age}
          </div>
      );
    })}
  </div>
);

} // end of App





// We need this so we can use it on other pages
export default App;













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