const React = require('react'),
    CharacterCard = require('../components/character_card.jsx');

class CharacterTable extends React.Component {
    render() {
        return (
            <div class="col-xs-12 col-lg-8 mb-5">
                <h2 class="my-3 got-text-slim white">{ this.props.title }</h2>
                <table class="table got-table">
                    <thead class="background-dark-grey">
                        <tr class="color-white">
                            <th scope="col">Character Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Bets Alive</th>
                            <th scope="col">Bets Dead</th>
                            <th scope="col">Bets Walker</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CharacterCard 
                            betsDeadCount="2"
                            betsAliveCount="4"
                            betsWalkerCount="2" 
                            statusClass="background-dead" 
                            name="John Snow" 
                            status="Dead!"
                        />
                        <CharacterCard 
                            betsDeadCount="2"
                            betsAliveCount="4"
                            betsWalkerCount="2" 
                            statusClass="background-walker" 
                            name="Danaerys Targaryen" 
                            status="Walker"
                        />
                        <CharacterCard 
                            betsDeadCount="2"
                            betsAliveCount="4"
                            betsWalkerCount="2" 
                            statusClass="" 
                            name="Tyrion Lannister" 
                            status="Alive"
                        />
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = CharacterTable;
    