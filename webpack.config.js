const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );


module.exports = {
	...defaultConfig,
    plugins: [
		...defaultConfig.plugins,
		// WP_NO_EXTERNALS global variable controls whether scripts' assets get
		// generated, and the default externals set.
		! process.env.WP_NO_EXTERNALS &&
			new DependencyExtractionWebpackPlugin( { injectPolyfill: false } ),
	].filter( Boolean ),
};