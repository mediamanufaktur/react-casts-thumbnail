var React = require("react");

module.exports = React.createClass({
    render: function() {
        return <button className="btn btn-primary" type="button">
            {this.props.badgeTitle} <span className="badge">{this.props.badgeNumber}</span>
        </button>
    }
});