const React = require('react');

class Base extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet"></link>

                    
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/public/style.css" crossorigin="anonymous" />

                </head>
                <body>{this.props.children}</body>
            </html>
        );
    }
}

module.exports = Base;
