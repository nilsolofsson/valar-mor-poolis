const React = require('react');

class CharacterStatusBet extends React.Component {

    getPillClass() {
        if (this.props.lifeBet == 'alive') {
            return "badge badge-pill badge-success"
        } else {
            return "badge badge-pill badge-danger"
        }
    }

    getWhiteWalker() {       
        if (this.props.whiteWalkerBet == 'yes') {
            return "WIGHT"
        } else {
            return ""
        }
    }


    render() {
        return (
            <div class="d-flex flex-column align-items-center justify-content-center m-4">
                <div>{this.props.name}</div>
                <div>
                    <span class={this.getPillClass()}>{this.props.lifeBet}</span>
                    <span class="badge badge-pill badge-info ml-1">{this.getWhiteWalker()}</span>
                </div>
            </div>
        );
    }
}

module.exports = CharacterStatusBet;