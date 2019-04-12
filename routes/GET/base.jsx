const React = require('react');

class Base extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                    <title>{this.props.title}</title>
                    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet"></link>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/public/style.css" crossorigin="anonymous" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/public/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/public/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <link rel="shortcut icon" href="/public/favicon/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="msapplication-config" content="/public/favicon/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
                </head>
                <body>{this.props.children}</body>
            </html>
        );
    }
}

module.exports = Base;
