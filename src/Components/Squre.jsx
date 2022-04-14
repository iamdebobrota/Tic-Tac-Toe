import React,{useEffect,useState} from 'react'
import swal from 'sweetalert';
import Box from './Box'
import './Style.css'

const clearState=["","","","","","","","",""]

function Squre() {
    const[gameState,setGameState]=useState(clearState)
    const[isXchance,setIsXchance]=useState(false)

    const userClick=(index)=>{
        let string = Array.from(gameState);
        if(string[index])
         return;
        string[index]=isXchance ? "X" : "O";
        setIsXchance(!isXchance)
        setGameState(string)
    }
const clearGame=()=>{
    setGameState(clearState)
}


const checkWinner=()=>{
    const lines=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],
        [1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    console.log(`class: App,function checkWinner==`, gameState[0],gameState[1],gameState[2]);
    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(gameState[a] && gameState[a]===gameState[b] && gameState[a]===gameState[c])
        {
            return gameState[a]
        }
    }
    return null;
}

useEffect(() => {
    let winner = checkWinner();
    console.log(winner)
    if(winner){
        clearGame();
        swal({
            title: "Congratulations!",
            text: `${winner} won the Game`,
            icon: "success",
            button: "Play Again",
          });
    }
    
    
    }, [gameState])

  return (
    <div className='header'>
      <p className='header-txt'>Tic Tac Toe</p>
      <div className='row box-center border-top-down'>
       <Box className='inner-square' onClick={()=>userClick(0)} state={gameState[0]}  />
       <Box onClick={()=>userClick(1)} state={gameState[1]}  />
       <Box onClick={()=>userClick(2)} state={gameState[2]}  />
    </div>
    <div className="row box-center border-mid">
    <Box onClick={()=>userClick(3)} state={gameState[3]}  />
    <Box className='inner-square' onClick={()=>userClick(4)} state={gameState[4]}  />
    <Box onClick={()=>userClick(5)} state={gameState[5]}  />
    </div>
    <div className="row box-center border-top-down">
    <Box onClick={()=>userClick(6)} state={gameState[6]}  />
    <Box className='inner-square ' onClick={()=>userClick(7)} state={gameState[7]}  />
    <Box onClick={()=>userClick(8)} state={gameState[8]}  />
    </div>
    <button className='clear-btn' onClick={clearGame}> Clear Game</button>
    </div>
  )
}

export default Squre;
