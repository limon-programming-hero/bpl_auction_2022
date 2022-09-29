import React from 'react';
import TeamCart from '../TeamCart/TeamCart.js';

const MyTeam = (props) => {
    const players = props.players;
    let total = 0;
    players.forEach(player => {
        total = total + player.salary;
    });
    // console.log(total);
    return (
        <div>
            <h3>Number of Players: {players.length}</h3>
            {players.map(player => <TeamCart key={player.key} player={player}></TeamCart>)}
            <h4>Total Salary: $ {total}</h4>
        </div>
    );
};

export default MyTeam;