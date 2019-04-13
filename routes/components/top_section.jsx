const React = require('react');

class TopSection extends React.Component {
    render() {
        return (
            <div class="container pb-5">
                <div class="row">
                    <div class="col-xs-12 d-block d-md-none p-3">
                        <img src="/public/svg/got-image-row.svg" alt="" class="mw-100"/>
                    </div>
                    <div class="col-xs-12 col-md-5 align-items-center d-flex py-4">
                        <div>
                            <div class="badge badge-pill badge-got mb-2">GOT S8 Death pool | <span class="font-weight-bold">{ this.props.teamName }</span></div>
                            <h1 class="got-text-big white">{ this.props.title }</h1>
                            <p class="got-text-mid">The ultimate Game of Thrones season 8 death pool. Who will live? Who will die? Who will turn into a blood thirsty ice zombie? Place your bets and compete against your coworkers! <br></br> Duun duun dudu-duun duun...</p>
                            <a href="https://forms.gle/tcERk2H4qMqCkzTu6" class="btn got-btn">Place my death bets</a>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-7 align-items-center d-flex py-5">
                        <div class="d-none d-md-block">
                            <img src="/public/svg/got-image.png" alt="" class="mw-100"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = TopSection;
    
