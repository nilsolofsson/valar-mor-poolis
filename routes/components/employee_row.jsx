const React = require('react');

class EmployeeRow extends React.Component {
    render() {
        return (
            <tr className={ this.props.class }>
                <td>{ this.props.name }</td>
                <td>{ this.props.points }</td>
            </tr>
        );
    }
}

module.exports = EmployeeRow;
    