import React, {useState, useReducer} from 'react';
import AppContext from "./app-context";

const cartReducer = function (state, action) {
    const items = state.items.concat();
    if (action.type === 'ADD') {
        const totalsPrice = state.totalsPrice + action.item.price * action.item.amount;
        const findIndex = state.items.findIndex(el => el.id === action.item.id);

        if (findIndex !== -1) {
            const updatedItem = items[findIndex];
            updatedItem.amount = updatedItem.amount + action.item.amount;
        } else {
            items.push(action.item);
        }

        return {
            items: items,
            totalsPrice: totalsPrice
        }

    } else if (action.type === 'REMOVE') {
        const itemFinder = items.find(item => item.id === action.id);
        const totalsPrice = state.totalsPrice - itemFinder.price * itemFinder.amount;
        const updateItems = items.filter(el => el.id !== action.id);

        return {
            items: updateItems,
            totalsPrice: totalsPrice
        }
    }

    return {
        items: [],
        totalsPrice: 0
    }
}

const cartDefaultValue = {
    items: [],
    totalsPrice: 0,
}

const AppContextProvider = (props) => {
    const [closeNav, setCloseNavModal] = useState(false);
    const [cartState, dispathCartAction] = useReducer(cartReducer, cartDefaultValue);


    const toggleNavModalHandler = function () {
        setCloseNavModal(prevState => !prevState);
    }

    const addItemToCartHandler = function (item) {
        dispathCartAction({type: 'ADD', item: item});
    }

    const removeItemToCartHandler = function (id) {
        dispathCartAction({type: 'REMOVE', id: id});
    }

    const value = {
        items: cartState.items,
        closeNavModal: closeNav,
        onToggleNavModal: toggleNavModalHandler,
        removeItem: removeItemToCartHandler,
        addItem: addItemToCartHandler,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;