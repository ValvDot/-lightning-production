const mix = require('laravel-mix');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

require('laravel-mix-webp');
require('laravel-mix-polyfill');

mix
    .setPublicPath('/')

    // Обрабатываем JS
    .js(
        'resources/assets/js/main.js',
        'public/assets/js'
    )
    .js(
        'node_modules/@glidejs/glide/dist/glide.js',
        'public/assets/js'
    )
    .js(
        'resources/assets/js/glide-init.js',
        'public/assets/js'
    )

    // Используем полифиллы
    .polyfill({
        enabled: false,
        useBuiltIns: "usage",
        targets: false, // Используем настройки browserslist из package.json
        debug: true,
        corejs: '3.8',
    })
    // Преобразовываем SASS в CSS
    .sass('resources/assets/scss/style.scss','public/assets/css')

    .sass('node_modules/@glidejs/glide/src/assets/sass/glide.core.scss','public/assets/css')
    .sass('node_modules/@glidejs/glide/src/assets/sass/glide.theme.scss','public/assets/css')

    // Переопределяем параметры mix
    .options({
        processCssUrls: false, // Отключаем автоматическое обновление URL в CSS
        postCss: [
            // Добавляем вендорные префиксы в CSS
            require('autoprefixer')({
                cascade: false, // Отключаем выравнивание вендорных префиксов
            }),
            // Группируем стили по медиа-запросам
            require('postcss-sort-media-queries'),
        ],
    })
    // Настраиваем webpack для обработки изображений
    .webpackConfig({
        plugins: [
            // Копируем картинки из каталога ресурсов в публичный каталог
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'resources/assets/images', // Путь относительно каталога с webpack.mix.js
                        to: 'public/assets/images', // Путь относительно каталога public/,
                        globOptions: {
                            ignore: ["**/icons/**"], // Игнорируем каталог с иконками
                        },
                    },
                ],
            }),
            // Оптимизируем качество изображений
            new ImageminPlugin({
                disable: process.env.NODE_ENV !== 'production', // отключить в других режимах
                test: /\.(jpe?g|png|gif)$/i,
                plugins: [
                    imageminMozjpeg({
                        quality: 80,
                        progressive: true,
                    }),
                ],
            }),
        ],
    })
    // Создаем WEBP версии картинок
    .ImageWebp({
        from: 'resources/assets/images', // Путь относительно каталога с webpack.mix.js
        to: 'public/assets/images', // Путь относительно каталога с webpack.mix.js
        imageminWebpOptions: {
            quality: 80
        }
    })

    // переносим все файлы
    .copy('resources/*.html', 'public/')
    .copy('resources/assets/font', 'public/assets/font')

;

