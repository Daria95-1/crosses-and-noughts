import { WIN_PATTERNS } from '../constants/win-patterns'

export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((winPattern) =>
		winPattern.every((cellIndex) => field[cellIndex] === currentPlayer)
	)
