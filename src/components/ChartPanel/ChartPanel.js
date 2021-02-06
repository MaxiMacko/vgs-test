import {Line} from "react-chartjs-2";
import {useContext} from "react";
import {AppContext} from "../../storage/reducer";

const ChartPanel = () => {
	const { state } = useContext(AppContext)

	const stateToShow = {
		...state,
		datasets: state.datasets.filter(item => item.checked)
	}

	return (
		<div>
			<Line data={stateToShow} />
		</div>
	)
}

export default ChartPanel