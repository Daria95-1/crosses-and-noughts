// здесь вся разметка
import PropTypes from 'prop-types'
import { Info, Field } from './components'
import { PLAYER, STATUS } from './constants'
import styles from './game.module.css'

export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestart
}) => {
	return (
		<div className={styles.game}>
			<Info status={status} currentPlayer={currentPlayer} />
			<Field field={field} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	)
}

GameLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([
		PLAYER.CROSS,
		PLAYER.NOUGHT,
		PLAYER.NOBODY
	]),
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
	),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func
}
