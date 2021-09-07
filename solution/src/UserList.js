import React from "react";
import User from "./User";

// UserList is the container for the users.
// It also initiates the fetch on mount and stores the response.
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
            // We only need name, website and ?company out of response:
            this.setState({
                users: json.map(user => {
                    let simple_user = {
                        name: user.name,
                        website: `https://${user.website}`,
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
        // If state contains error: *only* show error
        if (this.state.error != null) {
            return <div class="alert alert-danger" role="alert">
                {this.state.error}
            </div>
        }

        // Else if still loading: show loading text
        else if (this.state.users == null) {
            return <span>Loading...</span>
        }

        // Else user data is present: show user users
        else {
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
                <div className="UserList">
                    {users}
                </div>
            );
        }
    }
}

export default UserList;