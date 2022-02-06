import React from 'react';

const Empty = () => {
    const options = {
        textAlign : 'center',
        padding: '8rem 0',
        fontWeight : 700,
        color : 'hsl(219, 9%, 45%)'
    };


    return (
        <div style={options}>
            Your cart is empty.
        </div>
    );
};

export default Empty;