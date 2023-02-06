import './App.css';

function App() {
  const age = 15;
  if (age >= 18){
    return<h1>OVER AGE</h1>
  } else  {
    return <div className="App">UNDER AGE</div>
  }
  // return (
    // <div className="App"> 
    {/* This is a example of how to use the job */}
    // {/* <Job salary={90000} position="Senior SDE" company="Amazon" />
    // <Job salary={12000} position="Junior SDE" company="Google" />
    // <Job salary={10000} position="Senior SDE" company="Netflix" /> */}
    // {/* </div> */}
  // );
}

const Job = (props) => {
  return (
    <div>
  <h1>{props.salary}</h1>
  <h1>{props.position}</h1>
  <h1>{props.company}</h1>
  </div>
  )
}


// writing if statements
// const age = 15;
// if (age >= 18){
//   console.log("IS OVER AGE");
// } else {
//   console.log("IS UNDER AGE ")
// }

// another way to write it is ? = then  := else
// age >= 18 ? console.log("over 18") : console.log ("under 18")


export default App;


