/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Lightbox } from './Lightbox';

export const Gallery = ( props ) => {
	const { images } = props;
	const [ index, setIndex ] = useState( null );

	const nextImage = () => {
		if ( index >= images.length - 1 ) {
			setIndex( 0 );
		} else {
			setIndex( index + 1 );
		}
	};

	const previousImage = () => {
		if ( index <= 0 ) {
			setIndex( images.length - 1 );
		} else {
			setIndex( index - 1 );
		}
	};

	const clearImage = () => {
		setIndex( null );
	};

	return (
		<>
			{ images.map( ( image, key ) => (
				<li className="blocks-gallery-item" key={ key }>
					<figure>
						<img
							src={ image.src }
							alt={ image.alt }
							className={ image.classNames }
							onClick={ () => {
								setIndex( key );
							} }
						/>
					</figure>
				</li>
			) ) }
			{ ! ( index === null ) && (
				<Lightbox
					image={ images[ index ] }
					nextImage={ nextImage }
					previousImage={ previousImage }
					clearImage={ clearImage }
				/>
			) }
		</>
	);
};
