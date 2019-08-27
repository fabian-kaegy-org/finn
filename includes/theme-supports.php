<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};


add_action( 'init', __NAMESPACE__.'\theme_supports' );

function theme_supports() {

    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );

    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
    ) );
    
    add_theme_support( 'editor-font-sizes', array(
        array(
            'name' => __( 'Small', 'vatuca' ),
            'size' => 12,
            'slug' => 'small'
        ),
        array(
            'name' => __( 'Normal', 'vatuca' ),
            'size' => 16,
            'slug' => 'normal'
        ),
        array(
            'name' => __( 'Large', 'vatuca' ),
            'size' => 36,
            'slug' => 'large'
        ),
        array(
            'name' => __( 'Huge', 'vatuca' ),
            'size' => 50,
            'slug' => 'huge'
        )
    ) );

    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => __( 'strong magenta', 'vatuca' ),
            'slug' => 'strong-magenta',
            'color' => '#a156b4',
        ),
        array(
            'name' => __( 'light grayish magenta', 'vatuca' ),
            'slug' => 'light-grayish-magenta',
            'color' => '#d0a5db',
        ),
        array(
            'name' => __( 'very light gray', 'vatuca' ),
            'slug' => 'very-light-gray',
            'color' => '#eee',
        ),
        array(
            'name' => __( 'very dark gray', 'vatuca' ),
            'slug' => 'very-dark-gray',
            'color' => '#444',
        ),
    ) );
}