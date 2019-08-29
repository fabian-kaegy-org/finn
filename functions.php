<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}


// Includes
include_once get_template_directory().'/includes/theme-supports.php';
include_once get_template_directory().'/includes/enqueue-assets.php';
include_once get_template_directory().'/includes/register-menus.php';
include_once get_template_directory().'/includes/icon-functions.php';

// Customizer 
// include_once get_template_directory().'/includes/customizer/custom-controls.php';
// include_once get_template_directory().'/includes/customizer/sections.php';
// include_once get_template_directory().'/includes/customizer/settings.php';
