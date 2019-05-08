const React = require('react'),
    CharacterStatusBet = require('../components/character_status_bet.jsx');

class EmployeeRow extends React.Component {
    getModalId() {
        return "modal-" + this.props.name.toLowerCase().replace(/\s/g, '');
    }

    renderBets() {
        let returnArr = [];
        this.props.bets.forEach(character => returnArr.push(
            <CharacterStatusBet
                name={character.name}
                lifeBet={character.lifeBet}
                whiteWalkerBet={character.whiteWalkerBet}
            />
        ));

        return returnArr;
    }

    renderPosition() {
        let pos = this.props.position;

        switch (pos) {
            case 1:
                return <span className="player-position top-three">🥇</span>
            case 2:
                return <span className="player-position top-three">🥈</span>
            case 3:
                return <span className="player-position top-three">🥉</span>
            default:
                return <span className="player-position">{this.props.position}</span>;
        }
    }

    render() {
        return (
            <tr className={this.props.class}>
                <td>
                    {this.renderPosition()}
                    <a href="" data-toggle="modal" data-target={"#" + this.getModalId()}>
                        {this.props.name}
                    </a>
                </td>
                <td>{this.props.points}</td>

                <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id={this.getModalId()}>
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content container p-4">
                            <h1>{this.props.name}</h1>
                            <div class="d-flex flex-row mt-2 flex-wrap justify-content-center align-items-start">
                                {this.renderBets()}
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        );
    }
}

module.exports = EmployeeRow;
