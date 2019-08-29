/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { Gallery } from '../components/Gallery';

domReady( () => {
	const galleries = document.querySelectorAll( '.wp-block-gallery' );
	const lightboxRoot = document.createElement( 'div' );
	const page = document.getElementById( 'page' );
	page.appendChild( lightboxRoot );

	galleries.forEach( ( gallery ) => {
		const imageElements = gallery.querySelectorAll( 'img' );

		const images = [ ...imageElements ].reduce( ( accumulator, image ) => {
			return [
				...accumulator,
				{ src: image.src, alt: image.alt, classNames: image.classList },
			];
		}, [] );

		render( <Gallery images={ images } classNames={ gallery.classList } />, gallery );
	} );
} );
