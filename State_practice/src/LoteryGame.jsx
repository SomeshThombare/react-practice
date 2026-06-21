import React from 'react';
import './Lotery.css';
import {genTicket,Sum} from './helper';

export default function LotteryGame() {
    let [ticket, setTicket] = React.useState(genTicket(3));
    let isWinning = Sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genTicket(3));
    };
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <p>{ticket[0]}</p>
                <p>{ticket[1]}</p>
                <p>{ticket[2]}</p>
            </div>
            <br /><br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>
                {isWinning && "Congratulations, You won!"}
            </h3>
        </div>
    );
}

