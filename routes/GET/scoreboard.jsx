const React = require('react');
const Base = require('./base.jsx');

class Scoreboard extends React.Component {
    render() {
        return (
            <Base title={this.props.title}>
                <audio autoplay>
                    <source src="/public/MP3/Game of thrones 8-bit.mp3" type="audio/mpeg"/>
                </audio>
                <div class="container pb-5">
                    <div class="row">
                        <div class="col-xs-12 d-block d-md-none p-3">
                            <img src="/public/svg/got-image-row.svg" alt="" class="mw-100"/>
                        </div>
                        <div class="col-xs-12 col-md-5 align-items-center d-flex py-4">
                            <div>
                                <h1 class="got-text-big white">All men must bet</h1>
                                <p class="got-text-mid">The ultimate Game of Thrones season 8 death pool. Who will live? Who will die? Who will turn into a blood thirsty ice zombie? Place your bets and compete against your coworkers.</p>
                                <a href="" class="btn got-btn">Place my death bets</a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-7 align-items-center d-flex py-5">
                            <div class="d-none d-md-block">
                                <div class="d-block got-snow-overlay"></div>
                                <img src="/public/svg/got-image.svg" alt="" class="mw-100"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container pb-y">
                    <div class="row">
                        <div class="col-xs-12 col-md-3 ">
                            <div class="got-status-box">
                                <h3 class="mb-0"><span class="got-status-big-number">02</span>/40</h3>
                                <p class="got-medium-label">Characters dead</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-15 align-items-center d-flex text-center">
                            <p class="got-medium-label white mx-auto">And</p>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="got-status-box">
                                <h3 class="mb-0"><span class="got-status-big-number">01</span>/02</h3>
                                <p class="got-medium-label">Turned white</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-15 align-items-center d-flex text-center">
                            <p class="got-medium-label white mx-auto">After</p>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="got-status-box">
                                <h3 class="mb-0"><span class="got-status-big-number">01</span>/06</h3>
                                <p class="got-medium-label">Episodes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-5">
                    <div class="row">
                        <div class="col-xs-12 col-lg-8 mb-5">
                            <h2 class="my-3 got-text-slim white">Character Status</h2>
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
                                    <tr class="background-dead">
                                        <td>John Snow</td>
                                        <td>DEAD!</td>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>3</td>
                                    </tr>
                                    <tr class="background-walker">
                                        <td>Daenaerys Targaryen</td>
                                        <td>Walker</td>
                                        <td>4</td>
                                        <td>3</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Tyrion Lannister</td>
                                        <td>Alive</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-xs-12 col-lg-4 mb-5">
                            <h2 class="got-text-slim my-3 white">Employee Highscore</h2>
                            <table class="table got-table">
                                <thead class="background-gold">
                                    <tr class="color-white">
                                        <th scope="col">Employee name</th>
                                        <th scope="col">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Anton Estlund</td>
                                        <td>32</td>
                                    </tr>
                                    <tr>
                                        <td>Nils Olofsson</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>Ebba Dahlqvist</td>
                                        <td>8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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