<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

add_action('init', __NAMESPACE__.'\register_assets' );

function register_assets() {

    wp_enqueue_style('typekit-font',   "https://use.typekit.net/dce7mhi.css", [], wp_get_theme( 'Version' ));

    wp_enqueue_style( 'dashicons' );

    wp_enqueue_style(
        'extenal-stylesheets', 
        get_stylesheet_directory_uri(). '/external.css', 
        [], 
        wp_get_theme( 'Version' )
    );

    if ( ! is_admin() ) {
        $script_deps_path = _get_plugin_directory() . '/build/index.deps.json';
        $script_dependencies = file_exists( $script_deps_path )
        ? json_decode( file_get_contents( $script_deps_path ) )
        : array();
        wp_enqueue_script(
            __NAMESPACE__.'\main-script', 
            get_stylesheet_directory_uri().'/build/index.js', 
            array_merge($script_dependencies, []), 
            wp_get_theme( 'Version' ), 
            true
        );
        wp_enqueue_style(
            __NAMESPACE__.'\styles', 
            get_stylesheet_directory_uri().'/style.css', 
            ['extenal-stylesheets'],
            wp_get_theme( 'Version' )
        );
    }


    add_editor_style( 'editor.css' );

}

add_action('enqueue_block_editor_assets', __NAMESPACE__.'\enqueue_editor_assets');

function enqueue_editor_assets() {

    $script_deps_path = _get_plugin_directory() . '/build/editor.deps.json';
	$script_dependencies = file_exists( $script_deps_path )
    ? json_decode( file_get_contents( $script_deps_path ) )
	: array();
    wp_enqueue_script(
        __NAMESPACE__.'\block-editor-script', 
        get_stylesheet_directory_uri().'/build/editor.js', 
        array_merge($script_dependencies, []), 
        wp_get_theme( 'Version' ), 
        true
    );
}