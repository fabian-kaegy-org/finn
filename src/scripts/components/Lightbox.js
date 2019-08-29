/**
 * WordPress dependencies
 */
import { useEffect, useRef } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { Modal, detectOutsideClick } from './Modal';

export const Lightbox = ( props ) => {
	const {
		image,
		image: { src, alt, classNames },
		nextImage,
		previousImage,
		clearImage,
	} = props;

	const lightboxRef = useRef();

	const handleKeyDown = ( event ) => {
		event.preventDefault();

		if ( event.keyCode === 39 ) {
			nextImage();
		}
		if ( event.keyCode === 37 ) {
			previousImage();
		}
		if ( event.keyCode === 27 ) {
			clearImage();
		}
	};

	detectOutsideClick( lightboxRef, clearImage );

	useEffect( () => {
		document.addEventListener( 'keydown', handleKeyDown );
		return () => {
			document.removeEventListener( 'keydown', handleKeyDown );
		};
	}, [ image ] );

	return (
		src && (
			<Modal>
				<div className="lightbox" ref={ lightboxRef }>
					<button className="close" onClick={ clearImage }>
						<span className="dashicons dashicons-no" />
					</button>
					<button onClick={ previousImage }>
						<span className="dashicons dashicons-arrow-left-alt2" />
					</button>
					<img src={ src } alt={ alt } className={ classNames }></img>
					<button onClick={ nextImage }>
						<span className="dashicons dashicons-arrow-right-alt2" />
					</button>
				</div>
			</Modal>
		)
	);
};
