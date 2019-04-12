const React = require('react')

class MusicPlayer extends React.Component {
    render() {
        return (
            <audio controls controlsList="nodownload">
                <source src="/public/MP3/Game of thrones 8-bit.mp3" type="audio/mpeg"/>
            </audio>
        );
    }
}

module.exports = MusicPlayer;
    