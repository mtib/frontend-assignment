import React from "react";
import User from "./User";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            error: null,
        };
    }

    componentDidMount() {
        // Fetch user data and clean up already
        fetch(this.props.userEndpoint).then(data => {
            return data.json();
        }).then(json => {
            this.setState({
                users: json.map(user => {
                    let simple_user = {
                        name: user.name,
                        website: user.website,
                        thumbnail: "https://via.placeholder.com/150/1F83B3",
                        company: null,
                    }
                    if ("company" in user) {
                        simple_user.company = user.company.name;
                    }
                    return simple_user;
                }),
            });
        }).catch(reason => {
            this.setState({
                error: `Fetching users failed: ${reason}`,
            });
        });
    }

    render() {
        if (this.state.error != null) {
            return <div class="alert alert-danger" role="alert">
                {this.state.error}
            </div>
        }
        else if (this.state.users == null) {
            return <span>Loading...</span>
        } else {
            const users = this.state.users.map(user => {
                return <User
                    thumbnail={user.thumbnail}
                    name={user.name}
                    website={user.website}
                    company={user.company}
                />
            })
            console.log(this.state.users);
            return (
                <div className="userlist">
                    {users}
                </div>
            );
        }
    }
}

export default UserList;