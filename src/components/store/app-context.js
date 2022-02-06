import React from 'react';

const AppContext = React.createContext({
    closeNavModal: false,
    items: [],
    totalsPrice: 0,
    onToggleNavModal: () => {
    },
    addItem: (item) => {

    },
    removeItem: (id) => {

    },
});

export default AppContext;