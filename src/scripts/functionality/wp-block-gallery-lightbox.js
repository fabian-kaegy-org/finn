/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { Gallery } from '../components/Gallery';

export function setupGalleryLightboxes( elements ) {
	const lightboxRoot = document.createElement( 'div' );
	const page = document.querySelector( '.site-content' );
	page.appendChild( lightboxRoot );

	elements.forEach( ( gallery ) => {
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
}
