/// <reference types="cypress" />

context( 'Audit', () => {
	beforeEach( () => {
		cy.visit( `http://localhost:8890` );
	} );

	it('should run performance audits', () => {
        cy.lighthouse({
            performance: 90,
            accessibility: 90,
            bestPractices: 90,
            pwa: false,
        });
      });
} );
