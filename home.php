<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

get_header(); ?>

<div id="content" class="site-content">

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
                the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <?php
                        the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
                        ?>
                    </header><!-- .entry-header -->

                    <div class="entry-content">
                        <?php the_excerpt(); ?>
                        <a href="<?php echo get_permalink(); ?>">Read More</a>
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

	</div>

<?php get_footer(); ?>