/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { Image } from '../components/Image';

domReady( () => {
	const blocks = document.querySelectorAll( '.wp-block-image' );
	const lightboxRoot = document.createElement( 'div' );
	const page = document.getElementById( 'page' );
	page.appendChild( lightboxRoot );

	blocks.forEach( ( block ) => {
		const figure = block.querySelector( 'figure' );
		const image = figure.querySelector( 'img' );
		const caption = figure.querySelector( 'figcaption' );

		render( <Image image={ image } caption={ caption } classNames={ figure.classList } />, block );

		block.classList.add( 'lightbox-enabled' );
	} );
} );
