import React from "react"; // give me everything
// import { Component, useEffect } from "react"; //specific items from a library
import "./App.css";
import BasicInfo from "./BasicInfo";

//--HARD SOLUTION--

class App extends React.Component {
  constructor(props) {
    super(props); //props won't pass to children unless you pass to super
    this.state = {
      contacts: [
        {
          Name: "Keily",
          Age: 21,
          Number: 1,
        },
        {
          Name: "Tori",
          Age: 25,
          Number: 2,
        },
        {
          Name: "Justin",
          Age: 26,
          Number: 3,
        },
      ],
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        {contacts.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

// --MEDIUM SOLUTION--
// class BasicInfo extends React.Component {
//   render() {
//     const { name, age, number } = this.props.person;
//     return (
//       <div>
//         <ul>
//           <li>name: {name}</li>
//           <li>age: {age}</li>
//           <li>number: {number}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: "Keily",
//         age: 21,
//         number: 10,
//       },
//     };
//   }

//   render() {
//     return <BasicInfo person={this.state.person} />;
//   }
// }

// --EASY SOLUTION--
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {},
//     };
//   }

//(don't need this below, I just wanted to see something on the page to make sure it worked)
//   render() {
//     return (
//       <div className="App">
//         <ul>
//           <li>name: Keily</li>
//           <li>age: 21</li>
//           <li>number: 10</li>
//         </ul>
//       </div>
//     );
//   }
// }

//     //---VERY EASY SOLUTION--
//     <div className="App">
//       <ul>
//         <li> name: Keily</li>
//         <li> age: 21</li>
//         <li> number: 10</li>
//       </ul>
//     </div>
//   );
// }

export default App;
