import React from 'react';
import './App.css';

import Student from "./Student"
import UseStudentState from './UseStudentState';
import Imagemanipulation from './Imagemanipulation';
function App() {
  const h1=<h1>hello world</h1>;
const mystyle={
  color:'yellow',
  backgroundColor:'red'

}


// const stdata=[{
//   college:"abesec",
//   pic:<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'></img>,
//   name:"yash",
//   branch:"cse",
//   section:'b'

// },
// {
//   college:"abesec",
//   pic:<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'></img>,
//   name:"yash",
//   branch:"cse",
//   section:'b'},
//   {
//     college:"abesec",
//     pic:<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'></img>,
//     name:"yash",

//     branch:"cse",
//     section:'b',}


// ]
    return (
      <div style={{marginLeft:"600px"}}>
        <h2>hello using usestate</h2>
        <div>
          {/* <UseStudentState></UseStudentState> */}
          <Imagemanipulation/>
        </div>
      </div>
      
      // <div style={{backgroundColor:'tomato'}}>
      //   {h1}
      //    <div style={mystyle}>
      //     ABES ENGINEERING COLLEGE
      //   </div>
      //   <div style={{display:'flex'}}>
      //     {
      //       stdata.map(
      //         (ele)=>{
      //          return <Student data={ele}></Student>

      //         }
      //       )
      //     }
          
      //     {/* <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
      //     <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
      //     <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
      //     <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></> */}
          
      //   </div> 
      // </div>
        
    );
}

 
export default App;