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
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </html>
        );
    }
}

module.exports = Base;
