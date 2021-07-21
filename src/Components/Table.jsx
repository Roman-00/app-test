import React from 'react';

export const Table = ({ name, children }) => {
    return <div className="table">
        <div className="table__name">
            {name}
        </div>
        <div className="table__result">
            { children }
        </div>
    </div>
};