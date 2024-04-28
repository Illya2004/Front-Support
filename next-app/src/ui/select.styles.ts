import { colorConstants } from '@/constants/color.constants'
import { type StylesConfig } from 'react-select'

export const selectStyles: StylesConfig<any> = {
	control: (styles, { isFocused }) => ({
		...styles,
		backgroundColor: 'white',
		color: '#00',
		border: 'none',
		borderRadius: 0,
		borderBottom: `1px solid black`,
		boxShadow: isFocused ? 'none' : 'none',
		padding: '5px',

		'&:hover': {
			borderColor: 'black',
			backgroundColor: colorConstants.secondary,
		},
		':focus-within': {
			borderColor: 'black',
			backgroundColor: colorConstants.secondary,
		},
	}),

	input: styles => ({
		...styles,
	}),
	singleValue: styles => ({
		...styles,
	}),
	menu: styles => ({
		...styles,
		backgroundColor: colorConstants.secondary,
		padding: '5px 0 5px 0',
		marginTop: 5,
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
		...styles,
		backgroundColor: colorConstants.secondary,
		color: '#000',
		':hover': {
			backgroundColor: colorConstants.tertiary,
			cursor: 'pointer',
		},
	}),
}
