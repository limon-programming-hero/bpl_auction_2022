import React, { useEffect, useState } from 'react';
import PlayerData from '../../PlayerDataJSON/PlayerData.js'
import SinglePlayer from '../SinglePlayer/SinglePlayer.js'
import MyTeam from '../MyTeam/MyTeam.js'
import './players.css'


const Players = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        const newPlayer = PlayerData;
        setPlayers(newPlayer);
    }, []);

    const [MyTeamPlayers, setMyTeamPlayers] = useState([]);
    const clickHandler = (newTeamPlayer) => {
        const newPlayers = [...MyTeamPlayers, newTeamPlayer];
        setMyTeamPlayers(newPlayers);
    };

    return (
        <div className='player-section'>
            <div className='players'>
                {players.map(player => <SinglePlayer key={player.key} clickHandler={clickHandler} player={player}></SinglePlayer>
                )}
            </div>
            <div className='my-team'>
                <MyTeam players={MyTeamPlayers} ></MyTeam>
            </div>
        </div>
    );

};

export default Players;