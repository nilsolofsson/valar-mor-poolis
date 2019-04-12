const React = require('react'),
    CharacterCard = require('../components/character_card.jsx');

class CharacterTable extends React.Component {
    renderCharacters() {
        let characterList = [];
        this.props.characters.forEach(character => characterList.push(
            <CharacterCard
                betsAliveCount={character.betsAlive}
                betsDeadCount={character.betsDead}
                betsWalkerCount={character.betsWhiteWalker}
                statusClass={character.status == 'Alive!' ? '' : ('background-'+(character.status == 'Dead!' ? 'dead' : 'walker'))}
                name={character.name}
                status={character.status}
            />
        ));

        return characterList;
    }

    render() {
        return (
            <div class="col-xs-12 col-lg-8 mb-5">
                <h2 class="my-3 got-text-slim white">{ this.props.title }</h2>
                <div class="table-responsive-md">
                    <table class="table got-table table">
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
                            {this.renderCharacters()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

module.exports = CharacterTable;
