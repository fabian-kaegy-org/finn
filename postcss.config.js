module.exports = ( { file, options, env } ) => ( { /* eslint-disable-line */
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			stage: 0,
			autoprefixer: {
				grid: true,
			},
			features: {
				'overflow-wrap-property': false,
			},
		},
		'postcss-object-fit-images': {},
		'postcss-mixins': {},
		'postcss-nested': {},
		// Prefix editor styles with class `editor-styles-wrapper`.
		'postcss-css-variables': {
			preserve: true,
		},
		// Minify style on production using cssano.
		cssnano:
			env === 'production'
				? {
						preset: [
							'default',
							{
								autoprefixer: false,
								calc: {
									precision: 8,
								},
								convertValues: true,
								discardComments: {
									removeAll: true,
								},
								mergeLonghand: false,
								zindex: false,
							},
						],
				  }
				: false,
	},
} );
