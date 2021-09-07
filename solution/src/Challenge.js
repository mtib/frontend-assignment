
import React from "react";
import { hot } from 'react-hot-loader/root';

class Challenge extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <h1>
        Challenge Start
      </h1>
    );
  }
}

export default hot(Challenge);
