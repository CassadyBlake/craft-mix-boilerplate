const mix = require('laravel-mix');
require('laravel-mix-eslint');


// 🎚️ Base config
const config = {
  // Dev domain to proxy
  devProxyDomain: process.env.PRIMARY_SITE_URL || "https://boiler-template.ddev.site",
  // Paths to observe for changes then trigger a full page reload
  // devWatchPaths: ["templates", "src"],
  // Port to use with webpack-dev-server
  devServerPort: 5050,
  // Folders where purgeCss can look for used selectors
  // purgeCssGrabFolders: ["src", "templates"],
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

/**
 * 🎭 Hashing (for non-static sites)
 * Mix has querystring hashing by default, eg: main.css?id=abcd1234
 * This script converts it to filename hashing, eg: main.abcd1234.css
 * https://github.com/JeffreyWay/laravel-mix/issues/1022#issuecomment-379168021
 */
if (mix.inProduction()) {
  // Allow versioning in production
  mix.version();
  // Get the manifest filepath for filehash conversion
  const manifestPath = path.join(config.publicFolder, "mix-manifest.json");
  // Run after mix finishes
  mix.then(() => {
    const convertToFileHash = require("laravel-mix-make-file-hash");
    convertToFileHash({
      publicPath: config.publicFolder,
      manifestFilePath: manifestPath,
    });
  });
}


mix
  .setPublicPath(config.publicFolder)
  // JS
  .js('./src/js/app.js', './web/dist/js')

  // CSS
  .postCss('./src/css/style.css', './web/dist/css/style.css', [
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

  // Copy Image directory
  // .copyDirectory('src/img', 'web/dist/img')

  // BrowserSync
  .browserSync({
    port: config.devServerPort,
    proxy: config.devProxyDomain,
    serveStatic: [{
      route: 'web/dist'
    }],
    files: [
      'web/uploads/**/*.{jpg,jpeg,png,gif,svg}',
      'src/css/**/*.css',
      'src/js/**/*.js',
      'templates/**/*.twig'
    ]
  })