/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

domReady( () => {
	const headingTypes = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];

	const headingElements = headingTypes.reduce( ( accumulator, heading ) => {
		return [ ...document.getElementsByTagName( heading ), ...accumulator ];
	} );
	const withAnchor = headingElements.filter( ( element ) => element.id );

	withAnchor.forEach( ( element ) => {
		element.classList.add( 'linkable' );
		element.addEventListener( 'click', ( event ) => {
			window.location.hash = event.target.id;
		} );
	} );
} );
