import React from 'react';

const Home = () => {
    const redFlashyTextStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#800080',
        textShadow: '2px 2px 4px #000000',
    };

    const greyFlashyTextStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#808080',
        textShadow: '2px 2px 4px #000000',
    };

    return (
        <div>
            <h1 style={redFlashyTextStyle}>Welcome</h1>
            <h3 style={greyFlashyTextStyle}>Navigate using the links above</h3>
        </div>
    );
};

export default Home;