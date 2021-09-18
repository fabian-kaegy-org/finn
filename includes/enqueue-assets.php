<?php
/**
 * Enqueue assets
 *
 * @package finn
 */

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
};

add_action( 'init', __NAMESPACE__ . '\register_assets' );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_assets' );
add_filter( 'jetpack_sharing_counts', '__return_false', 99 );
add_filter( 'jetpack_implode_frontend_css', '__return_false', 99 );

/**
 * register theme assets
 */
function register_assets() {
	wp_enqueue_script(
		__NAMESPACE__ . '\main-script',
		get_stylesheet_directory_uri() . '/build/index.js',
		[],
		filemtime( _get_plugin_directory() . '/build/index.js' ),
		true
	);

	wp_enqueue_style(
		__NAMESPACE__ . '\styles',
		get_stylesheet_directory_uri() . '/build/index.css',
		[],
		filemtime( _get_plugin_directory() . '/build/index.css' )
	);

	add_editor_style( 'https://use.typekit.net/dce7mhi.css' );
	add_editor_style( '/build/index.css' );

}
