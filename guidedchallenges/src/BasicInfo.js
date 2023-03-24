import React from "react";

//--HARD SOLUTION--
class BasicInfo extends React.Component {
  render() {
    const { Name, Age, Number } = this.props.person;
    return (
      <div className="person">
        <ul>
          <li>Name: {Name}</li>
          <li>Age: {Age}</li>
          <li>Number: {Number}</li>
        </ul>
      </div>
    );
  }
}

export default BasicInfo;
