<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

get_header(); ?>

<main id="content" class="site-content">

		<?php
		if ( have_posts() ) {
			if ( is_home() && ! is_front_page() ) {
				?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<?php
            };
            while ( have_posts() ) {
				the_post();
				
				the_content();
			};
			
			the_posts_navigation();

		} else {
			?>
            <h1>Nothing here to see...</h1>
            <?php
        };
		?>

	</main>
	<?php comments_template(); ?>

<?php get_footer(); ?>