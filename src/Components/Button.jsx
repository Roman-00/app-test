import React from "react";

export const Button = ( { text, mode, onClick } ) => {

    let className = '';

    switch (mode) {
        case 'primary' : {
            className = 'btn__primary';
            break;
        }
        case 'secondary' : {
            className = 'btn__secondary';
            break;
        }
        default : {
            break;
        }
    }

    return <button className={`btn ${className}`} onClick={onClick}>{text}</button>

};