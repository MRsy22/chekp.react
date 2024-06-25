import React from 'react'
import Player from './Player'
import {players} from '../players'

const PlayerList = () => {
  return (
    <div className='list' style={{display:"flex",justifyContent:"space-around"}} >
       {players.map(
        (el)=>(<Player Player={el} key={el.id}/>)
       )}
    </div>
  )
}

export default PlayerList
