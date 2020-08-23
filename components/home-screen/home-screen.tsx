import React from 'react'
import { Layout, Text } from '@ui-kitten/components'

import { styles } from './styles.module'

interface HomeScreenProps {
	myProp: string
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => (
	<Layout style={styles.container}>
		<Text category="h1">HOME</Text>
	</Layout>

// sdsds
)

