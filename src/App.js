import React, {useContext} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Modal from "./components/UI/Modal";

import AppContext from "./components/store/app-context";

function App() {
    const appCTX = useContext(AppContext);
    return (
        <>
            {appCTX.closeNavModal && <Modal type={1}/>}
            <Navbar/>
            <Product/>
        </>
    );
}

export default App;
