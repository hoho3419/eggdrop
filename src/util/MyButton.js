import React from 'react';

const MyButton = (props) => {
    return (
        <button onClick={props.onClick} className={props.className}>{props.text}{props.children}</button>
    );
};

export default MyButton;