const mix = require('laravel-mix');
require('laravel-mix-eslint');


// 🎚️ Base config
const config = {
  // Dev domain to proxy
  devProxyDomain: process.env.SITE_URL || "https://boiler-template.ddev.site",
  // Paths to observe for changes then trigger a full page reload
  devWatchPaths: ["templates", "src"],
  // Port to use with webpack-dev-server
  devServerPort: 6060,
  // Folders where purgeCss can look for used selectors
  purgeCssGrabFolders: ["src", "templates"],
  // Urls for CriticalCss to look for "above the fold" Css
  criticalCssUrls: [
    // { urlPath: "/", label: "index" },
    // { urlPath: "/about", label: "about" },
  ],
  // Folder served to users
  publicFolder: "web",
  // Foldername for built src assets (publicFolder base)
  publicBuildFolder: "dist",
};


mix
  .setPublicPath('web/dist')
  // JS
  .js('./src/js/app.js', 'web/dist/js/app.js')

  // CSS
  .postCss('./src/css/style.css', 'web/dist/css/style.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
  ])

  // Options
  .options({
    processCssUrls: false,
    terser: {
      extractComments: false, // Stop Mix from generating license file
    }
  })

  // Copy HTML files
  // .copy('src/*.html', 'web/dist')

  // Copy Image directory
  .copyDirectory('src/img', 'web/dist/img')

  // BrowserSync
  .browserSync({
    port: '5050',
    proxy: config.devProxyDomain,
    serveStatic: ['src/css/style.css', 'src/js/app.js'],
    files: [
      'web/uploads/**/*.{jpg,jpeg,png,gif,svg}',
      'src/css/**/*.css',
      'src/js/**/*.js',
      'templates/**/*.twig'
    ],
    // snippetOptions: {
    //   rule: [{
    //     match: /<\/head>/i,
    //     fn: function (snippet, match) {
    //         return '<link rel="stylesheet" type="text/css" href="/dist/css/style.css"/>' + snippet + match;
    //     }
    //   },
    //   {
    //     match: /<\/body>/i,
    //       fn: function (snippet, match) {
    //           return '<script type="text/javascript" src="/dist/js/app.js"/>' + snippet + match;
    //       }
    //   }]
    // }
  })