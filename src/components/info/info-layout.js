import PropTypes from 'prop-types'

export const InfoLayout = ({ information }) => {
	return <div>{information}</div>
}

InfoLayout.propTypes = {
	information: PropTypes.string
}
