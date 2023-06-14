import React from 'react';

const Home = () => {
    const flashyTextStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#ff0000',
        textShadow: '2px 2px 4px #000000',
    };

    return (
        <div>
            <h1 style={flashyTextStyle}>Welcome to the Jungle</h1>
        </div>
    );
};

export default Home;