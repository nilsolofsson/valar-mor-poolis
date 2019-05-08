const React = require('react'),
    EmployeeRow = require('../components/employee_row.jsx');

class EmployeeTable extends React.Component {
    renderPlayers() {
        let playersList = [];
        let playerPosition = 1;

        this.props.scores.forEach((player) => {
            playersList.push(
                <EmployeeRow
                name={player.name}
                points={player.points}
                bets={player.bets}
                position={playerPosition}
                />);
            playerPosition += 1;
        });

        return playersList;
    }

    render() {
        return (
            <div class="col-xs- col-lg-4 mb-5">
                <h2 class="got-text-slim my-3 white">{ this.props.title }</h2>
                <table class="table got-table">
                    <thead class="background-gold">
                        <tr class="color-white">
                            <th scope="col">Employee name</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPlayers()}
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = EmployeeTable;
