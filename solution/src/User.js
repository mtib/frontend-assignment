import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let name = <span className="User-name">{this.props.name}</span>
        if (this.props.website != null) {
            name = <a href={this.props.website}>{name}</a>
        }

        let company = <span></span>
        if (this.props.company != null) {
            company = <span className="User-company">{this.props.company}</span>
        }

        return (
            <div className="User">
                <div className="d-flex">
                    <img src={this.props.thumbnail} className="User-thumbnail flex-shrink-1" />
                    <div className="w-100">
                        {name} {company}
                    </div>
                </div>
            </div>
        );
    }
}

export default User;