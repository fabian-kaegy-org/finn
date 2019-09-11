<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

get_header(); ?>

<main id="content" class="site-content">

		<?php
		if ( have_posts() ) {
            while ( have_posts() ) {
                the_post();
                ?><h1 class="post-title">
                    <?php the_title(); ?>
                </h1>
                <p class="post-date"><?php the_date() ?></p>
                <?php $categories = get_the_terms( get_the_ID(), 'projects-category' );
                    if (!empty($categories)) { ?>

                        <ul class="post-categories">
                        <?php foreach($categories as $category) {
                            $category_link = get_category_link( $category->term_id );
                            echo "<li><a href='$category_link'>$category->name</a></li>";
                        }
                        wp_reset_postdata();
                        ?>
                    </ul>
                <?php } ?>
				<?php the_content();
			};
			
			the_posts_navigation();

		} else {
			?>
            <h1>Nothing here to see...</h1>
            <?php
        };
		?>

	</main>
	<?php if (comments_open()) {
        comments_template(); 
    }?>

<?php get_footer(); ?>