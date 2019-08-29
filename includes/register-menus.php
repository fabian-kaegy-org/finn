<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

add_action('init', __NAMESPACE__.'\register_menus');

function register_menus() {
    
    register_nav_menus( [
        'primary'    => __( 'Top Menu', 'finn' ),
		'social' => __( 'Social Links Menu', 'finn' ),
		'legal' => __( 'Site Info Menu', 'finn' ),
    ] );

}