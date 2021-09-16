<?php
/**
 * Theme Supports
 *
 * @package finn
 */

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
};


add_action( 'init', __NAMESPACE__ . '\theme_supports' );

/**
 * Add theme supports.
 */
function theme_supports() {
	add_theme_support( 'align-wide' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'post-thumbnails' );

	add_theme_support(
		'custom-logo',
		[
			'height'      => 100,
			'width'       => 400,
			'flex-height' => true,
			'flex-width'  => true,
			'header-text' => array( 'site-title', 'site-description' ),
		]
	);

}
