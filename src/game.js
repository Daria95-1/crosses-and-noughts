import { useState } from 'react'
import { GameLayout } from './game-layout'
import { STATUS, PLAYER } from './constants'
import { handleCellClick, handleRestart } from './handlers'
import { createEmptyField } from './utils'

export const Game = () => {
  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS)
  const [field, setField] = useState(createEmptyField())

  const state = {status, setStatus, currentPlayer, setCurrentPlayer, field, setField}

  return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)}
			handleRestart={() => handleRestart(state)}
		/>
  )
}
