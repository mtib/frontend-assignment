
import React from "react";
import { hot } from 'react-hot-loader/root';
import UserList from "./UserList";

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEndpoint: "https://jsonplaceholder.typicode.com/users",
    };
  }
  render() {
    return (
      <div className="responsiveContainer">
        <h1>
          Users
        </h1>
        <div>
          <UserList userEndpoint={this.state.userEndpoint} />
        </div>
      </div>
    );
  }
}

export default hot(Challenge);
