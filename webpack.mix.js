const mix = require('laravel-mix');
require('laravel-mix-eslint');
const path = require("path");

// 🎸 Base config
const config = {
  devProxyDomain: process.env.PRIMARY_SITE_URL || "https://boiler-template.ddev.site", // Dev domain to proxy
  devServerPort: 8080, // Port to use with webpack-dev-server
  publicFolder: "web", // Folder served to users
  publicBuildFolder: "dist", // Foldername for built src assets (publicFolder base)
};


// JS & CSS
mix
  .js('./src/js/app.js', config.publicBuildFolder)
  .postCss('./src/css/style.css', config.publicBuildFolder, [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer')
  ])
  .setPublicPath(config.publicFolder)


// Change Hashing format... https://github.com/ben-rogerson/laravel-mix-make-file-hash
if (mix.inProduction()) {
  mix.version()
  // Run after mix finishes
  mix.then(() => {
    const convertToFileHash = require("laravel-mix-make-file-hash")
    convertToFileHash({
      publicPath: config.publicFolder,
      manifestFilePath: `${config.publicFolder}/mix-manifest.json`,
    })
  })
}
  

// Options
// mix.options({
//   processCssUrls: false,
//   // terser: {
//   //   extractComments: false, // Stop Mix from generating license file
//   // }
// })

// Copy Image directory
mix.copyDirectory('./src/img', `${config.publicFolder}/${config.publicBuildFolder}/img`)

// 🗂️ Static
mix.copyDirectory('./src/static', `${config.publicFolder}/${config.publicBuildFolder}`)

// :card_index_dividers: Favicons
mix.copyDirectory('./src/favicons', config.publicFolder)

// BrowserSync
mix.browserSync({
  proxy: config.devProxyDomain,
  files: [
    'web/**/*.js',
    'web/**/*.css',
    'templates/**/*'
  ],
  // Set 'injectChanges' to true for css injection on changes with no page reload (hot module reload)...
  // * * * if true be aware that if a div is dependant on/created by a .js script it will not update without a reload. Example: masonry.js grid-items. * * *
  injectChanges: false,
})