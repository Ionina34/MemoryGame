import {useState } from 'react'
import Cards from './Cards';
import Selector from './Selector';

function Game() {
    const [game, setGame] = useState(false)
    const [field, setField] = useState(4);

    return (
        <>
               <>
                   {game ? (
                    <Cards setGameStart={ setGame} size={field}/>
                   ) :
                   (
                       <Selector field={field} setField={setField} setGame={setGame }/>
                   )}
               </>
        </>    
    )
}

export default Game