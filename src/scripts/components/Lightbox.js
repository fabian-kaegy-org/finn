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
		image: { src, alt, classNames, caption },
		nextImage,
		previousImage,
		clearImage,
		length,
		index,
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
						<span className="dashicons dashicons-no-alt" />
					</button>
					{ length > 1 &&
						<button onClick={ previousImage } className="previous">
							<span className="dashicons dashicons-arrow-left-alt2" />
						</button>
					}
					<figure>
						<img src={ src } alt={ alt } className={ classNames }></img>
						{ caption && <figcaption>{ caption }</figcaption> }
					</figure>
					{ length > 1 &&
					<span className="image-count">{ `${ index + 1 } / ${ length }` }</span>
					}
					{ length > 1 &&
						<button onClick={ nextImage } className="next">
							<span className="dashicons dashicons-arrow-right-alt2" />
						</button>
					}
				</div>
			</Modal>
		)
	);
};
