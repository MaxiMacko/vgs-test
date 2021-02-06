import {
	AppContext,
	DISABLE_CHECKBOX_ACTION,
	ENABLE_CHECKBOX_ACTION,
	SET_INITIAL_DATA,
	UPDATE_DATA
} from "../../storage/reducer";
import {useContext} from "react";
import styles from './CheckBoxPanel.module.css'
import {BASIC_VALUES_URL, SINGLE_VALUE_URL} from "../../helpers/utils";

const CheckBoxPanel = () => {
	const { state, dispatch } = useContext(AppContext)

	const checkboxes = state.datasets;

	const onChangeHandler = (id) => {
		const checkBoxFromState = checkboxes.find(checkbox => checkbox.id === id)
		if(!checkBoxFromState.checked) {
			fetch(BASIC_VALUES_URL)
				.then(resp => resp.json())
				.then(data => {
					dispatch({ type: SET_INITIAL_DATA, payload: {id, data: data.data }})
				})
				.then(() => {
					const intervalId = setInterval(() => {
						fetch(SINGLE_VALUE_URL)
							.then(resp => resp.json())
							.then(data => {
								dispatch({ type: UPDATE_DATA, payload: {id, data: data.data[0] }})
							})
					}, 1000)
					dispatch({ type: ENABLE_CHECKBOX_ACTION, payload: { id, intervalId } })
				})
		} else {
			dispatch({ type: DISABLE_CHECKBOX_ACTION, payload: { id } })
		}
	}
	return (
		<div className={styles.root}>
			{
				checkboxes.map(checkbox => (
					<div key={checkbox.id} className={styles.checkbox}>
						<input
							type="checkbox"
							id={checkbox.id}
							name={checkbox.name}
							checked={checkbox.checked}
							onChange={() => onChangeHandler(checkbox.id)}
						/>
							<label htmlFor={checkbox.name}>
								{checkbox.name}
							</label>
					</div>
				))
			}
		</div>
	)
}

export default CheckBoxPanel