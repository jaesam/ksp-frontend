import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState();

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>회사소개</DropdownItem>
                    <DropdownItem>제품소개</DropdownItem>
                    <DropdownItem
                        leftIcon="😃"
                        rightIcon="!"
                        goToMenu="settings">
                        Contact
            </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                    <DropdownItem leftIcon="LEFTICON" goToMenu="main" />
                    <DropdownItem>Settings</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu;