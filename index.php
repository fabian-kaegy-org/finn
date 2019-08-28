<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

get_header(); ?>

<main id="content" class="site-content">

    <header>
        <?php if (is_home()) {?>
            <h1 class="page-title">Home</h1>
        <?php } else { ?>
            <h1 class="page-title"><?php the_archive_title(); ?></h1>
        <?php } ?>
    </header>
		<?php
		if ( have_posts() ) {
            while ( have_posts() ) {
                the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <?php
                        the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
                        ?>
                        <span class="post-date"><?php the_date() ?></span>
                        <?php $categories = get_the_category();
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
                    </header><!-- .entry-header -->
                    <?php the_post_thumbnail(); ?>

                    <div class="entry-content">
                        <?php the_excerpt(); ?>
                        <a class="read-more" href="<?php the_permalink(); ?>">
                            Continue reading<span class="screen-reader-text"> <?php get_the_title(); ?></span>
                        </a>
				
                    </div><!-- .entry-content -->

                </article>
				
			<?php };
			the_posts_navigation();
		} else {
			?>
            <h1>Nothing here to see...</h1>
            <?php
        };
		?>

	</main>

<?php get_footer(); ?>