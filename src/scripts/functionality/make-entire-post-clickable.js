/**
 * setup make entire post clickable functionality
 *
 * @param {HTMLDivElement} element - element to setup functionality on
 */
export function setupMakePostClickable( element ) {
	const linkElement = element.querySelector( '.wp-block-post-title a' );
	element.style.cursor = 'pointer';

	element.addEventListener( 'click', function () {
		linkElement.click();
	} );
}
