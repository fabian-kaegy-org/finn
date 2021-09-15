/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

/**
 * External dependencies
 */
import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import php from 'highlight.js/lib/languages/php';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';

const languages = [
	{ name: 'php', language: php, formated: 'PHP' },
	{ name: 'javascript', language: javascript, formated: 'JavaScript' },
	{ name: 'json', language: json, formated: 'JSON' },
	{ name: 'bash', language: bash, formated: 'bash' },
	{ name: 'css', language: css, formated: 'CSS' },
	{ name: 'scss', language: scss, formated: 'SCSS' },
];

languages.forEach( ( language ) => {
	hljs.registerLanguage( language.name, language.language );
} );

domReady( () => {
	document
		.querySelectorAll( 'pre.wp-block-code code' )
		.forEach( ( codeBlock ) => {
			const parent = codeBlock.parentNode;

			hljs.highlightElement( codeBlock );

			languages.forEach( ( language ) => {
				/**
				 * check wether the .wp-block-code element has a custom class
				 * that equals one of the supported languages
				 */
				if ( parent.classList.contains( language.name ) ) {
					codeBlock.classList.add( language.name );
				}

				/**
				 * check the code element for a class that responds to one of the
				 * supported Languages to add the Formated Name as an rel attribute.
				 */
				if ( codeBlock.classList.contains( language.name ) ) {
					codeBlock.setAttribute( 'rel', language.formated );
				}
			} );

			/**
			 * add hljs class to .wp-block-code element to enable styling
			 */
			parent.classList.add( 'hljs' );
		} );
} );
