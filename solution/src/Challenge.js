
import React from "react";
import { hot } from 'react-hot-loader/root';
import UserList from "./UserList";

class Challenge extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="responsiveContainer">
        <h1>
          Users
        </h1>
        <div>
          <UserList />
        </div>
      </div>
    );
  }
}

export default hot(Challenge);
