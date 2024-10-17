import js from '@eslint/js'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default [
	js.configs.recommended,
	eslintPluginUnicorn.configs['flat/recommended'],
	...tseslint.configs.recommended
]
