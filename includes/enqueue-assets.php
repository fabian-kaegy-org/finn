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

/**
 * register theme assets
 */
function register_assets() {

	wp_enqueue_style(
		'typekit-font',
		'https://use.typekit.net/dce7mhi.css',
		[],
		wp_get_theme( 'Version' )
	);

	$script_asset_path = _get_plugin_directory() . '/build/index.asset.php';
	$script_asset      = file_exists( $script_asset_path )
		? require $script_asset_path
		: [
			'dependencies' => [],
			'version'      => filemtime( _get_plugin_directory() . '/build/index.js' ),
		];
	wp_enqueue_script(
		__NAMESPACE__ . '\main-script',
		get_stylesheet_directory_uri() . '/build/index.js',
		array_merge( $script_asset['dependencies'], [] ),
		$script_asset['version'],
		true
	);

	wp_enqueue_style(
		__NAMESPACE__ . '\styles',
		get_stylesheet_directory_uri() . '/build/index.css',
		[ 'wp-block-library', 'wp-block-library-theme' ],
		wp_get_theme( 'Version' )
	);

	add_editor_style( 'https://use.typekit.net/dce7mhi.css' );
	add_editor_style( '/build/index.css' );

}

add_action( 'wp_footer', __NAMESPACE__ . '\register_wp_footer' );

/**
 * register theme assets in footer
 */
function register_wp_footer() {
	global $wp_version;

	wp_enqueue_style(
		'dashicons',
		'/wp-includes/css/dashicons.min.css',
		[],
		$wp_version
	);
}
