import { checkWin, checkEmptyCell } from '../utils'
import { PLAYER, STATUS } from '../constants'


export const handleCellClick = ({ status, field, currentPlayer, setStatus, setField, setCurrentPlayer }, cellIndex) => {
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return
	}

	const newField = [...field]

	newField[cellIndex] = currentPlayer

	setField(newField)

	if (checkWin(newField, currentPlayer)) {
		setStatus(STATUS.WIN)
	} else if (checkEmptyCell(newField)) {
		setCurrentPlayer(
			currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS
		)
	} else {
		setStatus(STATUS.DRAW)
	}
}
