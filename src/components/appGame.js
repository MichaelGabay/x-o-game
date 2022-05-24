import React, { useEffect, useState } from 'react'
import { BsCircle, BsX } from "react-icons/bs"
import Square from './square'
export default function AppGame() {
  let arrInit = ["", "", "", "", "", "", "", "", "",]
  const [strWin, setSrtWin] = useState("");
  const [game, setGame] = useState(arrInit);
  const [player, setPlater] = useState(false)

  const onSclick = (i) => {
    let arr = [...game];
    arr[i] = player ? "X" : "O"
    setGame(arr);
    setPlater(!player)
  }

  useEffect(() => {
    const winner = checkWinner();
    if (winner != null) {
      if (winner == "O") {
        setSrtWin("O is wnning the game");
      }
      else {
        setSrtWin("X is wnning the game");
      }
    }
    else {
      if (!game.includes(""))
        setSrtWin("tyco")
    }

  }, [game])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  }

  return (
    <div className='app'>
      <h2 className='display-5 mb-4'>X - O game</h2>
      <h1 className='mb-4 strWin'>{strWin||""}</h1>
      <div className='Mrow justify-content-center'>
        <Square Css={"b-bottom-right"} game={game[0]} onSclick={() => onSclick(0)} />
        <Square Css={"b-bottom-right"} game={game[1]} onSclick={() => onSclick(1)} />
        <Square Css={"b-bottom"} game={game[2]} i={2} onSclick={() => onSclick(2)} />
      </div>
      <div className='Mrow justify-content-center'>
        <Square Css={"b-bottom-right"} game={game[3]} onSclick={() => onSclick(3)} />
        <Square Css={"b-bottom-right"} game={game[4]} onSclick={() => onSclick(4)} />
        <Square Css={"b-bottom"} game={game[5]} onSclick={() => onSclick(5)} />
      </div>
      <div className='Mrow justify-content-center'>
        <Square Css={"b-right"} game={game[6]} onSclick={() => onSclick(6)} />
        <Square Css={"b-right"} game={game[7]} onSclick={() => onSclick(7)} />
        <Square game={game[8]} onSclick={() => onSclick(8)} />
      </div>
      <button onClick={() => { setGame(arrInit); setSrtWin("") }} className='btn mt-4 myBt'>play again</button>
    </div>

  )
}
