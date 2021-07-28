/// <reference types="cypress" />

context( 'Loads WordPress', () => {
	beforeEach( () => {
		cy.visit( `http://localhost:8890` );
	} );

	it( 'renders the site', () => {
		// check wether accordions can get expanded
		cy.get( 'h1.site-title' ).should( 'be.visible' );
	} );
} );
