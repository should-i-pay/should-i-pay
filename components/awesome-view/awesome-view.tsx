import React from 'react'
import { View } from 'react-native'
import { withStyles } from '@ui-kitten/components'

interface AwesomeViewProps {
	test: string
}

const AwesomeView: React.FunctionComponent<AwesomeViewProps> = (props) => {
	const { eva, style, ...restProps } = props

	console.log('sss')

	return (
		<View
			{...restProps}
			style={[eva.style.awesome, style]}
		/>
	)
}

export const ThemedAwesomeView = withStyles(AwesomeView, (theme) => ({
	awesome: {
		backgroundColor: theme['color-primary-500'],
	},
}))
