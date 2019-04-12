const React = require('react'),
    Base = require('./base.jsx');

class fourofour extends React.Component {
    render() {
        return (
            <Base title={this.props.title}>

                <div class="container py-5">
                    <div class="row py-5">
                        <div className="col-12 text-center">
                            <h1 className="got-text-big white">Oops, something went wrong!</h1>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div className="col-12 text-center">
                            <img src="/public/svg/joffrey.svg" alt="" class="mw-100"/>
                        </div>
                    </div>
                    <div class="row py-5">
                        <div className="col-12 text-center">
                            <a href="/" class="btn got-btn">Back to home screen</a>
                        </div>
                    </div>
                </div>
            </Base>
        );
    }
}

module.exports = fourofour;