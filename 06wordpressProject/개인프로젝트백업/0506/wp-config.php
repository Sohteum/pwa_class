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
define( 'AUTH_KEY',         'WVWE7Gc1FgbWzVL(;_2MT{WED5EJ<)aX^@m3hSG4W#)IQXGz9qrreu;&oX[%1HH:' );
define( 'SECURE_AUTH_KEY',  'do|Mv~_bZGYD! ESl@#U2c}gL{JLPL<6D?]wL,xYm(Y}RsOA-%kqEyi/,2D:Dn47' );
define( 'LOGGED_IN_KEY',    'uBl/.w#5[|$Q;Cp|f}B=*.5e:2r.t6uPhs>X98RILzX#1[hmpAX7zQ8T%vGCPelp' );
define( 'NONCE_KEY',        'R@uD(X0.X8ps,{c#P4.kqjm3tRB(jgbYD47o_wKK?jcnPkpb=;IhFdc/l5I//4Uu' );
define( 'AUTH_SALT',        'cd52NZ!2vaf-76zH5qOa-[Se~.>krg)hcNL@tcCzZC`(p=ygqKerS,v:.-a=K3|%' );
define( 'SECURE_AUTH_SALT', '6}I1A-dr=`,aZ>4KWgu2A{_w|}ENzF.s!er]Le77gJ{!gveWlL+*VAlUo,4+I;U*' );
define( 'LOGGED_IN_SALT',   'R[)u!NyOb^m0BC[~{a]I!@)@fZPK&FGJodfZIiT+#d2Qpe#2a/M$L=awPU&E:!SZ' );
define( 'NONCE_SALT',       'XmcGE0]a.5&EqGXvPI-B~TYT>+zbV1F~*{O_cE.saMzy=gL/r!#P=6Gj.U:4@iCf' );

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
