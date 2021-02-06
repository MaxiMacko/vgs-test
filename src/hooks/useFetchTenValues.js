import {useState, useEffect} from "react";
import {BASIC_VALUES_URL} from "../helpers/utils";

function useFetchTenValues() {
	const [values, setValues] = useState([])
	const [error, setError] = useState('')
	useEffect(() => {
		fetch(BASIC_VALUES_URL)
			.then(resp => resp.json())
			.then(values => {
				setValues(values.data)
			})
			.catch(error => setError(error))
	}, [])

	return {
		values,
		error
	}
}

export default useFetchTenValues