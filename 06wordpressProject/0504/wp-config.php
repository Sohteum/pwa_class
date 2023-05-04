<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpdb' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '1234' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eQ^<O*.ykp5.h KZx.Y6owdQO76mR|Q{Drv[F^5 eG>dV[{;P51lD,/LArJ3|.{O' );
define( 'SECURE_AUTH_KEY',  'X&HBJUke1:q8O@(m&Qd,Eyho`y&90og;>YW>XbTUs;R.u_M4 cA; m^+`L,P9;u>' );
define( 'LOGGED_IN_KEY',    'q:TX(_3?cj 0EF_b 0<~W7Jc$GIB&F~7BU}{f{a(>P0%k/d]u`!;Zj$u0f-;Q+UD' );
define( 'NONCE_KEY',        'eT}^k]>3:lNWU3h?&7PcKgR@0:9U@R::P}GZVsQDoswh2G},JEFFlK,+=,c#H;J_' );
define( 'AUTH_SALT',        'x9wg(?W7FZAA:=`4)sxYE5y.%<koxa>W,:)$H{<W*/#/4G;(3>t/5-B]:i2gblEA' );
define( 'SECURE_AUTH_SALT', 'udb!;E7UEQrc ycP.|Q7}i).QG|-uDYZ+qO)cpC44(L^X)JtONkIC+;+6#8L.NP:' );
define( 'LOGGED_IN_SALT',   'i#(5@R8sY0lG<,:*2&R-}F<)2pCO!k(x{w`<Hp>G2(&[:,sul`Pc<?vBs:Ewo6a]' );
define( 'NONCE_SALT',       'KOu-kD^YB:G[}|~rcGb8:WPQRi<ABdb 45scrS76$?q,%$vDRp70HTfOPDoTfLSW' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
