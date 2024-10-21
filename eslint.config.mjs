import js from '@eslint/js'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPerfPlugin from 'eslint-plugin-react-perf'

const jsFiles = ['**/*.{js,jsx,cjs,mjs}']
const tsFiles = ['**/*.{ts,tsx,cts,mts}', '**/*.d.ts']

export default [
	js.configs.recommended,
	eslintPluginUnicorn.configs['flat/recommended'],
	reactPerfPlugin.configs.flat.recommended,
	...tseslint.configs.recommended,
	{
		// Base JS / TS config
		files: [...jsFiles, ...tsFiles],
		rules: {
			'unicorn/prevent-abbreviations': [
				'error',
				{
					replacements: {
						env: {
							environment: false
						},
					}
				}
			]
		}
	},
	{
		// JS Overrides
		files: [...jsFiles],
		rules: {}
	},
	{
		// TS Overrides
		files: [...tsFiles],
		rules: {}
	},
	{
		// Client config
		files: ['apps/client/**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
		},
	},
	{
		// Server Config
		files: ['apps/server/**/*.ts'],
		rules: {
			'no-undef': 'error',
			'semi': 'warn'
		}
	}
]
