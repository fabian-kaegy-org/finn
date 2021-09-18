import domReady from '@wordpress/dom-ready';
import './functionality/font-loading';
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

	const postBlocks = document.querySelectorAll( '.wp-block-post' );
	if ( postBlocks.length ) {
		import(
			/* webpackChunkName: "make-entire-post-clickable" */ './functionality/make-entire-post-clickable'
		).then( ( { setupMakePostClickable } ) => {
			postBlocks.forEach( ( postBlock ) => {
				setupMakePostClickable( postBlock );
			} );
		} );
	}
} );
