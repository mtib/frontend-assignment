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
        // If the data from that endpoint was used mulitple times or multiple UserLists needed
        // to be created the fetch and cache should happen in a level above (or localStorage or
        // a ServiceWorker)
        // The reference to that data could be given as a props, UserLink could even request a 
        // refresh through a props call.
        fetch(this.props.userEndpoint).then(data => {
            return data.json();
        }).then(json => {
            // We only need name, website and ?company out of response:
            this.setState({
                users: json.map(user => {
                    // In a real-world application this would need to be sanitized and checked more
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
            // In production we probably don't want to show the `reason` instead the type of the `reason`
            // could be mapped to some human readable text.
            this.setState({
                error: `Fetching users failed: ${reason}`,
            });
        });
    }

    render() {
        // If state contains error: *only* show error
        if (this.state.error != null) {
            // Done like this so this.state.error could also be a Fragment
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
            // User components don't own the data, they only access it through props
            const users = this.state.users.map(user => {
                return <User
                    thumbnail={user.thumbnail}
                    name={user.name}
                    website={user.website}
                    company={user.company}
                />
            })
            return (
                <div className="UserList">
                    {users}
                </div>
            );
        }
    }
}

export default UserList;