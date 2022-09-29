import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './singlePlayer.css';

const SinglePlayer = (props) => {
    let player = props.player;
    const { name, img, salary } = player;

    return (
        <div className='single-player'>
            <div className='Image'>
                <img src={img} alt="" />
            </div>
            <div className='single-player-info'>
                <p><small> Name: {name}</small></p>
                <p><small>Salary: $ {salary} </small> </p>
                <button onClick={() => props.clickHandler(player)}><FontAwesomeIcon icon={faPlus} />Add </button>
            </div>

        </div>
    );
};

export default SinglePlayer;