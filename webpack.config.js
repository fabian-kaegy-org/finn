const webpack = require( 'webpack' );
const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const path = require( 'path' );

module.exports = [
	{
		...defaultConfig,
		entry: {
			...defaultConfig.entry,
			customizer: './src/customizer.js',
			editor: './src/editor.js',
		},
	},
	{
		...defaultConfig,
		entry: {
			style: './src/style.scss',
			editor: './src/editor.scss',
		},
		output: {
			...defaultConfig.output,
			path: path.resolve( process.cwd(), '.' ),
		},
		module: {
			...defaultConfig.module,
			rules: [
				...defaultConfig.module.rules,
				{
					test: /\.(sc|sa|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: require.resolve( 'css-loader' ),
						},
						{
							loader: require.resolve( 'postcss-loader' ),
							options: {
								ident: 'postcss',
								plugins: () => [ postcssPresetEnv() ],
							},
						},
						{
							loader: require.resolve( 'sass-loader' ),
						},
					],
				},
			],
		},
		plugins: [
			...defaultConfig.plugins,
			new MiniCssExtractPlugin(),
			new BrowserSyncPlugin( {
				proxy: 'http://fabian-kaegy.dev',
			} ),
			require( 'autoprefixer' ),
		],
	},
];
