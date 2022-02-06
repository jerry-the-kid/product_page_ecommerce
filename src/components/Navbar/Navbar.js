import React, {useContext, useState, useEffect} from 'react';
import avatar from '../../images/image-avatar.png';
import List from "./List";
import CartIcon from "../svg/CartIcon";
import styles from './Navbar.module.scss';
import logo from '../../images/logo.svg';
import CartModal from "./CartModal";
import Btn from "../UI/Btn";
import hamburger from '../../images/icon-menu.svg';
import AppContext from "../store/app-context";
import 'animate.css';

const Navbar = () => {
    const [isHoverCart, setIsHoverCart] = useState(false);
    const [btnIsHighlight, setBtnIsHighlight] = useState(false);

    const appCTX = useContext(AppContext);
    const amount = appCTX.items.reduce((curr, val) => curr + val.amount, 0);
    const navbarClassName = `${styles.badge} ${btnIsHighlight && 'animate__bounceIn'}`;

    const toggleCartHandler = function () {
        setIsHoverCart((prevState) => !prevState);
    }

    useEffect(function () {
        setBtnIsHighlight(true);
        const timer = setTimeout(function () {
            setBtnIsHighlight(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [appCTX.items]);


    return (
        <nav className={styles.navbar}>

            <div className={styles['navbar__options']}>
                <Btn icon={hamburger} className={styles.hamburger} onClick={appCTX.onToggleNavModal}/>
                <img src={logo} alt='logo' className={styles['navbar__logo']}/>
                <List/>
            </div>
            <div className={styles['navbar__cart-box']}>
                <div className={styles['navbar__cart-container']} onClick={toggleCartHandler}>
                    <CartIcon className={styles['navbar__cart']}/>
                    {amount > 0 ? <span className={navbarClassName}>{amount}</span> : ''}
                </div>
                <img src={avatar} alt='avatar' className={styles['navbar__image']}/>
            </div>

            {isHoverCart && <CartModal/>}
        </nav>
    );
};

export default Navbar;