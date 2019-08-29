/**
 * WordPress dependencies
 */
import { useEffect, createPortal } from '@wordpress/element';

const modalRoot = document.getElementById( 'page' );

export const Modal = ( props ) => {
	const { children } = props;
	const element = document.createElement( 'div' );
	element.classList.add( 'modal-container' );

	useEffect( () => {
		modalRoot.appendChild( element );
		return () => {
			modalRoot.removeChild( element );
		};
	}, [ children ] );
	return createPortal( children, element );
};

export const detectOutsideClick = ( ref, callback ) => {
	const handleClickOutside = ( event ) => {
		if ( ref.current && ! ref.current.contains( event.target ) ) {
			callback();
		}
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect( () => {
		// Bind the event listener
		document.addEventListener( 'mousedown', handleClickOutside );
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener( 'mousedown', handleClickOutside );
		};
	} );
};
