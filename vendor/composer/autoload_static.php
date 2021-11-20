<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit290b3e4706bea049fc4e104b83083394
{
    public static $files = array (
        '256c1545158fc915c75e51a931bdba60' => __DIR__ . '/..' . '/lcobucci/jwt/compat/class-aliases.php',
        '0d273777b2b0d96e49fb3d800c6b0e81' => __DIR__ . '/..' . '/lcobucci/jwt/compat/json-exception-polyfill.php',
        'd6b246ac924292702635bb2349f4a64b' => __DIR__ . '/..' . '/lcobucci/jwt/compat/lcobucci-clock-polyfill.php',
    );

    public static $prefixLengthsPsr4 = array (
        'L' => 
        array (
            'Lcobucci\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Lcobucci\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/lcobucci/jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit290b3e4706bea049fc4e104b83083394::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit290b3e4706bea049fc4e104b83083394::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit290b3e4706bea049fc4e104b83083394::$classMap;

        }, null, ClassLoader::class);
    }
}
