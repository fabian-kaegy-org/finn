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

export const Image = ( props ) => {
	const { image, caption, classNames } = props;
	const [ index, setIndex ] = useState( null );

	const clearImage = () => {
		setIndex( null );
	};

	return (
		<>
			<figure className={ classNames } onClick={ () => {
						setIndex( 0 );
					} }>
				<img src={ image.src } alt={ image.alt } className={ image.classNames } style={ image.style } width={image.width} height={image.height} sizes={image.sizes} srcset={image.srcset}/>
				{ caption && <figcaption>{ caption }</figcaption> }
			</figure>
			{ ! ( index === null ) && (
				<Lightbox
					image={ image }
					nextImage={ () => {} }
					previousImage={ () => { } }
					clearImage={ clearImage }
					length={ 1 }
					index={ index }
				/>
			) }
		</>
	);
};
