import React from 'react' // TODO: интересно, как можно пофиксить warning 'React' is defined but never used.eslint@typescript-eslint/no-unused-vars ?
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'

const HomeScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">HOME</Text>
	</Layout>
)

const App = ()  => (
	<ApplicationProvider
		{...eva}
		theme={eva.light}
	>
		<HomeScreen />
	</ApplicationProvider>
)

export default App
