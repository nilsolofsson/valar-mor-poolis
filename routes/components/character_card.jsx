const React = require('react');

class CharacterCard extends React.Component {
    render() {
        return (
            <tr className={ this.props.statusClass }>
                <td>{ this.props.name }</td>
                <td>{ this.props.status }</td>
                <td>{ this.props.betsAliveCount }</td>
                <td>{ this.props.betsDeadCount }</td>
                <td>{ this.props.betsWalkerCount }</td>
            </tr>
        );
    }
}

module.exports = CharacterCard;
    