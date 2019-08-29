<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

/**
 * Display SVG icons in social links menu.
 */
function nav_menu_social_icons( $item_output, $item, $depth, $args ) {

    $social_icons_map = [
        'github'      => [
            'github.com',
        ],
        'twitter'      => [
            'twitter.com',
        ],
		'facebook'    => [
			'facebook.com',
			'fb.me',
        ],
		'wordpress'   => [
			'wordpress.com',
            'wordpress.org',
            'profiles.wordpress.org'
        ]
    ];

    if ( 'social' === $args->theme_location ) {

        $domain = parse_url($item->url, PHP_URL_HOST);

        $svg = "";
        foreach($social_icons_map as $social_nettwork => $urls) {
            if ( in_array( $domain, $urls ) ) {
                $svg = "<span class='dashicons dashicons-$social_nettwork'></span>";
            } else {
                if ($svg == "") {
                    $svg = "<span class='dashicons dashicons-admin-links'></span>";
                }
            }
        }
        echo $svg;
        $item_output = str_replace( $args->link_after, '</span>' . $svg, $item_output );
    }
	return $item_output;
}
// add_filter( 'walker_nav_menu_start_el', __NAMESPACE__.'\nav_menu_social_icons', 10, 4 );