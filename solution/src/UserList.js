import React from "react";
import User from "./User";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="userlist">
                <User thumbnail="https://via.placeholder.com/150/1F83B3" name="Markus Becker" website="https://blog.mtib.dev/" company="Applicant" />
            </div>
        );
    }
}

export default UserList;