import domReady from '@wordpress/dom-ready';
import './functionality/ancor-links';

domReady( () => {
	const codeBlocks = document.querySelectorAll( 'pre.wp-block-code code' );
	if ( codeBlocks.length ) {
		import(
			/* webpackChunkName: "syntax-highlighting" */ './functionality/syntax-highlighting'
		).then( ( { setupSyntaxHighlighting } ) => {
			setupSyntaxHighlighting( codeBlocks );
		} );
	}

	const galleries = document.querySelectorAll( '.wp-block-gallery' );
	if ( galleries.length ) {
		import(
			/* webpackChunkName: "wp-block-gallery-lightbox" */ './functionality/wp-block-gallery-lightbox'
		).then( ( { setupGalleryLightboxes } ) => {
			setupGalleryLightboxes( galleries );
		} );
	}
} );
