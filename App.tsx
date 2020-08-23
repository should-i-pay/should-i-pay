import React from 'react' // TODO: интересно, как можно пофиксить warning 'React' is defined but never used.eslint@typescript-eslint/no-unused-vars ?
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import { HomeScreen } from './components'

const App = ()  => (
	<ApplicationProvider
		{...eva}
		theme={eva.light}
	>
		<HomeScreen />
	</ApplicationProvider>
)

export default App
