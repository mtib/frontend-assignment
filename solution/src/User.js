import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// Class for visualizing user data given through props.
// Shows company iff present, links to website iff present
// Props: name, thumbnail, ?company, ?website
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let name = <span className="User-name">{this.props.name}</span>
        if (this.props.website != null) {
            name = <a className="User-name" href={this.props.website}>{this.props.name}</a>
        }

        let company = <span></span>
        if (this.props.company != null) {
            // Just a fun little fix for showing the full company name on hover,
            // because long name/company mixes are truncated frequently.
            company = <OverlayTrigger
                key="trigger"
                placement="top"
                overlay={<Tooltip>{this.props.company}</Tooltip>}>
                <span className="User-company">({this.props.company})</span>
            </OverlayTrigger>
        }

        return (
            <div className="User d-inline-block py-3">
                <div className="d-flex align-items-center d-block">
                    <img src={this.props.thumbnail} className="User-thumbnail flex-shrink-1" />
                    <span className="w-100 text-truncate">
                        {name} {company}
                    </span>
                </div>
            </div>
        );
    }
}

export default User;