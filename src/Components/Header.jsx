import React from 'react';

// Импортируем компоненты
import { Button } from './Button';
// Импортируем изображения
import logo from '../images/logo.svg';

// Импортируем подключение к websocket
import { ws } from '../services/api';

export const Header = () => {

    const connectWs = () => {
        ws.addEventListener('message', (event) => {
            console.log('event', event.data);
        });
    };

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__interface">
                    <a href="#" className="header__logo">
                        <img src={logo} alt="logo" className="logo"/>
                        <span className="header__logo--text">App</span>
                    </a>

                    <div className="header__nav">
                        <Button text="Старт" mode="primary" onClick={() => connectWs()}/>
                        <Button text="Статистика" mode="secondary"/>
                    </div>
                </div>
            </div>
        </header>
    )

};