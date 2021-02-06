import React from 'react'

export const initialState = {
	labels: [1,2,3,4,5,6,7,8,9,10],
	labelsInterval: null,
	datasets: [
		{
			id: 1,
			name: 'First',
			label: 'First',
			checked: false,
			data: []
		},
		{
			id: 2,
			name: 'Second',
			label: 'Second',
			checked: false,
			data: []
		},
		{
			id: 3,
			name: 'Third',
			label: 'Third',
			checked: false,
			data: []
		},
		{
			id: 4,
			name: 'Fourth',
			label: 'Fourth',
			checked: false,
			data: []
		},
		{
			id: 5,
			name: 'Fifth',
			label: 'Fifth',
			checked: false,
			data: []
		},
		{
			id: 6,
			label: 'Sixth',
			name: 'Sixth',
			checked: false,
			data: []
		}
	]
}

function arrayUpdateHelper(dataArray, item) {
	dataArray.shift()
	dataArray.push(item)
	return [...dataArray]
}

export const reducer = (state, action) => {

	switch(action.type) {
		case ENABLE_CHECKBOX_ACTION:
			return {
				...state,
				datasets: state.datasets
					.map(item => item.id === action.payload.id
						? {...item, checked: true, interval: action.payload.intervalId, label: item.name }
						: item)
			};
		case DISABLE_CHECKBOX_ACTION:
			return {
				...state,
				datasets: state.datasets
					.map(item => item.id === action.payload.id
							? {...item, checked: false, interval: clearInterval(item.interval) }
							: item
					)
			};
		case SET_INITIAL_DATA:
			return {
				...state,
				datasets: state.datasets
					.map(item => {
						if (item.id === action.payload.id) {
							return {
								...item,
								data: action.payload.data
							}
						} else {
							return item
						}
					})
			}
		case UPDATE_DATA:
			return {
				...state,
				datasets: state.datasets
					.map(item => {
						if (item.id === action.payload.id) {
							const result = {
								...item,
								data: arrayUpdateHelper(item.data, action.payload.data)
							}
							return result
						} else {
							return item
						}
					})
			}
		default:
			return state
	}
};

export const UPDATE_DATA = 'UPDATE_DATA'
export const SET_INITIAL_DATA = 'SET_INITIAL_DATA'
export const ENABLE_CHECKBOX_ACTION = 'ENABLE_CHECKBOX_ACTION'
export const DISABLE_CHECKBOX_ACTION = 'DISABLE_CHECKBOX_ACTION'

export const AppContext = React.createContext();