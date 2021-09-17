if ( ! ( 'ontouchstart' in window ) ) {
	const headingTypes = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];

	// get all headings on the site
	const headingElements = headingTypes.reduce( ( headings, headingLevel ) => {
		return [
			...document.getElementsByTagName( headingLevel ),
			...headings,
		];
	} );

	const headingsWithAnchor = headingElements.filter(
		( element ) => element.id
	);

	headingsWithAnchor.forEach( ( element ) => {
		element.classList.add( 'linkable' );
		element.addEventListener( 'click', ( event ) => {
			window.location.hash = event.target.id;
		} );
	} );
}
