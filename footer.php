<?php 

namespace fabiankaegy\finn;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
};

?>

	<footer id="footer" class="site-footer">
        <?php 
        wp_nav_menu( [
            'theme_location' => 'legal',
            'menu_id'        => 'legal-menu',
        ] );
        ?>

        <?php 
        wp_nav_menu( [
            'theme_location' => 'social',
            'menu_id'        => 'social-menu',
        ] );
        ?>

        <p><a href="https://wordpress.org">Proudly powered by WordPress</a></p>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>