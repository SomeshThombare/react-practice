
import './App.css'
import LinkButton from './LinkButton'
import LudoBoard from './LudoBoard'
import TODOLIst from './todo'
import LotteryGame from './LoteryGame'
import TicketNum from './Ticket'
import Ticket from './Ticket'
import AsyncStateExample from './Asynchrnous'
import Calculator from './Tempreture'
function App() {
 
  return (
    <>
    {/* <p>USeStates</p> 

    <LinkButton/>
    <p>play a</p> */}

    {/* <LudoBoard/> */}
    {/* <TODOLIst/> */}
    {/* <LotteryGame/> */}

    {/* <Ticket ticket={[5, 10, 15]} />
    <Ticket ticket={[1, 2, 3]} /> */}

        <h1>Lottery Game</h1>
      {/* <LotteryGame n={3} winningSum={15}/>
      <LotteryGame n={4} winningSum={15}/> */}

      {/* <AsyncStateExample/> */}

      <Calculator/>
  
    </>
  )
}

export default App
