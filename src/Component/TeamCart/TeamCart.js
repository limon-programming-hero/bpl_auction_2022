import React from 'react';

const TeamCart = (props) => {
    const style = {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid gray"
    }
    const { name, salary } = props.player;
    return (
        <div>
            <div style={style}>
                <div><p>{name}</p></div>
                <div><p>$ {salary}</p></div>
            </div>
        </div>
    );
};
export default TeamCart;