
import React from "react";
// Hot reloader wouldn't be enabled for production ;)
import { hot } from 'react-hot-loader/root';
import UserList from "./UserList";

// Container for Colourbox challenge.
// Most actual logic in UserList.js
class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEndpoint: "https://jsonplaceholder.typicode.com/users",
      // As mentioned in UserList.js, caching the data from userEndpoint might make more
      // sense in a full application.
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
