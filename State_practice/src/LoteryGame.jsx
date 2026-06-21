import React from 'react';
// import './Lotery.css';
import {genTicket,Sum} from './helper';
import Ticket from './Ticket';

export default function LotteryGame({n=4,winningSum=15}) {
    let [ticket, setTicket] = React.useState(genTicket(n));
    let isWinning = Sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    };
    return (
    <>
       
        <div>
            <Ticket ticket={ticket} />
            
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>
                {isWinning && "Congratulations, You won!"}
            </h3>
        </div>
        </>
    );
}

