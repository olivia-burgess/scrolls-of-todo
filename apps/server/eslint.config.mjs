import globals from 'globals'

import baseConfig from '../../eslint.config.mjs'

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}']
	},
	{
		languageOptions: {
			globals: globals.node
		}
	},
	...baseConfig
]
