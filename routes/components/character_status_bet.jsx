const React = require('react');

class CharacterStatusBet extends React.Component {

    getPillClass() {
        if (this.props.lifeBet == 'alive') {
            return "badge-success"
        } else {
            return "badge-danger"
        }
    }

    getWhiteWalker() {
        if (this.props.whiteWalkerBet == 'yes') {
            return <span class="badge badge-pill badge-info ml-1">WIGHT</span>
        } else {
            return;
        }
    }


    render() {
        return (
            <div class="d-flex flex-column align-items-center justify-content-center m-4">
                <div>{this.props.name}</div>
                <div>
                    <span class={"badge badge-pill "+this.getPillClass()}>{this.props.lifeBet}</span>
                    {this.getWhiteWalker()}
                </div>
            </div>
        );
    }
}

module.exports = CharacterStatusBet;