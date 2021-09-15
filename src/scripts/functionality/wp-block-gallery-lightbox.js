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
	const page = document.querySelector( '.site-content' );
	page.appendChild( lightboxRoot );

	galleries.forEach( ( gallery ) => {
		const figureElements = gallery.querySelectorAll( 'figure' );

		const images = [ ...figureElements ].reduce(
			( accumulator, figure ) => {
				const image = figure.querySelector( 'img' );
				const caption = figure.querySelector( 'figcaption' );
				return [
					...accumulator,
					{
						src: image.src,
						alt: image.alt,
						classNames: image.classList,
						caption: caption ? caption.innerText : null,
					},
				];
			},
			[]
		);

		render(
			<Gallery images={ images } classNames={ gallery.classList } />,
			gallery
		);

		gallery.classList.add( 'lightbox-enabled' );
	} );
} );
