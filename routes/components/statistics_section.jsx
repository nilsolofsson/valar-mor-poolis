const React = require('react'),
    StatisticCard = require('../components/statistic_card.jsx');

class StatisticsSection extends React.Component {
    render() {
        return (
            <div class="container py-5">
                <div class="row">
                    <div class="col-12">
                        <h2 class="my-3 got-text-slim white">{ this.props.title }</h2>
                    </div>
                </div>
                <div class="row">
                    <StatisticCard bigStat="03" totalStat="40" statLabel="Characters Dead"></StatisticCard>
                    <div class="col-12 col-md-15 py-3 align-items-center d-flex text-center">
                        <p class="got-medium-label white mx-auto">And</p>
                    </div>
                    <StatisticCard bigStat="02" totalStat="03" statLabel="White / Wight"></StatisticCard>
                    <div class="col-12 col-md-15 py-3 align-items-center d-flex text-center">
                        <p class="got-medium-label white mx-auto">After</p>
                    </div>
                    <StatisticCard bigStat="01" totalStat="06" statLabel="Episodes"></StatisticCard>
                </div>
            </div>
        );
    }
}

module.exports = StatisticsSection;
    