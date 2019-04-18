const React = require('react');

class StatisticCard extends React.Component {
    render() {
        return (
            <div class="col-xs-12 col-md-3 ">
                <div class="got-status-box">
                    <h3 class="mb-0"><span class="got-status-big-number">{ this.props.bigStat }</span>/{ this.props.totalStat }</h3>
                    <p class="got-medium-label">{ this.props.statLabel }</p>
                </div>
            </div>
        );
    }
}

module.exports = StatisticCard;
