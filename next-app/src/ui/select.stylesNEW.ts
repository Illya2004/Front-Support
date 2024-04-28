import { colorConstants } from '@/constants/color.constants'
import { CSSObject } from '@emotion/react'
import { FieldError } from 'react-hook-form'

interface ControlProps {
	isFocused: boolean
}

export const selectStylesNEW = (error?: FieldError) => ({
	control: (styles: CSSObject, { isFocused }: ControlProps) => ({
		...styles,
		backgroundColor: colorConstants.secondary,
		color: '#000',
		border: error ? '1px solid red' : 'none',
		borderRadius: 8,
		boxShadow: isFocused ? 'none' : 'none',
		padding: '8px',

		'&:hover': {
			backgroundColor: colorConstants.secondary,
		},
		':focus-within': {
			backgroundColor: colorConstants.secondary,
		},
	}),

	input: (styles: CSSObject) => ({
		...styles,
	}),

	singleValue: (styles: CSSObject) => ({
		...styles,
	}),

	menu: (styles: CSSObject) => ({
		...styles,
		boxShadow: 'none',
		zIndex: 50,
		backgroundColor: colorConstants.secondary,
		padding: '5px 0',
		marginTop: -7,
	}),

	indicatorSeparator: (styles: CSSObject) => ({
		display: 'none',
	}),

	option: (styles: CSSObject, { isFocused }: ControlProps) => ({
		...styles,
		backgroundColor: isFocused
			? colorConstants.tertiary
			: colorConstants.secondary,
		color: '#000',
		':hover': {
			backgroundColor: colorConstants.tertiary,
			cursor: 'pointer',
		},
	}),
})
