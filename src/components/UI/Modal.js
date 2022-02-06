import React, {useContext} from 'react';
import ReactDOM from "react-dom";
import NavListModal from "./NavListModal";
import Backdrop from "./Backdrop";
import AppContext from "../store/app-context";

const targetRoot = document.getElementById('modal');

const Modal = (props) => {
    const appCtx = useContext(AppContext);

    return (
        <>
            {ReactDOM.createPortal(props.type === 1 ? <NavListModal onClick={appCtx.onToggleNavModal}/> :
                <btn/>, targetRoot)}
            {ReactDOM.createPortal(<Backdrop onClick={appCtx.onToggleNavModal}/>, targetRoot)}
        </>
    );
};

export default Modal;