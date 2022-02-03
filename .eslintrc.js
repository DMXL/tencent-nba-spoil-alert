module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['node_modules', 'lib', 'less'],
	rules: {
	},
	globals: {
		$: 'readonly',
	},
};
