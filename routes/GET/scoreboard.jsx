const React = require('react'),
    Base = require('./base.jsx'),
    TopSection = require('../components/top_section.jsx'),
    MusicPlayer = require('../components/music_player.jsx'),
    Snow = require('../components/snow.jsx'),
    StatisticsSection = require('../components/statistics_section.jsx'),
    CharacterTable = require('../components/character_table.jsx'),
    EmployeeTable = require('../components/employee_table.jsx');

class Scoreboard extends React.Component {
    render() {
        return (
            <Base title={this.props.title}>

                <MusicPlayer></MusicPlayer>
                
                <Snow></Snow>

                <TopSection title="All men must bet"></TopSection>

                <StatisticsSection title="Statistics" stats={this.props.stats}></StatisticsSection>

                <div class="container py-5">
                    <div class="row">
                        <CharacterTable title="Character Status" characters={this.props.characters}></CharacterTable>            
                        <EmployeeTable title="Employee Highscore" players={this.props.players}></EmployeeTable>
                    </div>
                </div>

                <div class="container pb-5">
                    <div class="row">
                        <div class="col-12 got-text-small text-center">
                            <a href="https://enappstudio.se"><img src="https://svgbadgegenerator-jizhysuyuy.now.sh/madeWithLove/2E3036/" /></a>
                        </div>
                    </div>
                </div>
            </Base>
        );
    }
}

module.exports = Scoreboard;