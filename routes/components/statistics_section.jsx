const React = require('react'),
    StatisticCard = require('../components/statistic_card.jsx');

class StatisticsSection extends React.Component {
    amountDead() {
        return this.props.stats.amountDead+this.props.stats.amountWalkers;
    }

    leadingZero(value) {
        return (value<10 ? '0': '');
    }

    render() {
        return (
            <div class="container py-5">
                <div class="row">
                    <div class="col-12">
                        <h2 class="my-3 got-text-slim white">{ this.props.title }</h2>
                    </div>
                </div>
                <div class="row">
                    <StatisticCard bigStat={this.leadingZero(this.amountDead())+this.amountDead()} totalStat={this.leadingZero(this.props.stats.totalCharacters)+this.props.stats.totalCharacters} statLabel="Characters Dead"></StatisticCard>
                    <div class="col-12 col-md-15 py-3 align-items-center d-flex text-center">
                        <p class="got-medium-label white mx-auto">And</p>
                    </div>
                    <StatisticCard bigStat={this.leadingZero(this.props.stats.amountWalkers)+this.props.stats.amountWalkers} totalStat={this.leadingZero(this.props.stats.totalCharacters)+this.props.stats.totalCharacters} statLabel="White / Wight"></StatisticCard>
                    <div class="col-12 col-md-15 py-3 align-items-center d-flex text-center">
                        <p class="got-medium-label white mx-auto">After</p>
                    </div>
                    <StatisticCard bigStat={this.leadingZero(this.props.stats.amountEpisodes)+this.props.stats.amountEpisodes} totalStat={this.leadingZero(this.props.stats.totalEpisodes)+this.props.stats.totalEpisodes} statLabel="Episodes"></StatisticCard>
                </div>
            </div>
        );
    }
}

module.exports = StatisticsSection;
