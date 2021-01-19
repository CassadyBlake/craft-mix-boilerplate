### *This is an add-on to the boilerplate created* [here](https://github.com/tomaszbujnowicz/laravel-mix-tailwindcss-purgecss/blob/master/package.json) *by* [tomaszbujnowicz](https://github.com/tomaszbujnowicz)

# Minimal Boilerplate for building static pages.

## 🚀 Laravel Mix 6, TailwindCSS 2, PostCSS 8, and ES6 Vanilla JS components.

### Requirements
Make sure all dependencies have been installed before moving on:

* [yarn](https://yarnpkg.com/lang/en/)
* [Node.js](https://nodejs.org/en/download/) >= 10
* [composer](https://getcomposer.org)
* [docker](https://www.docker.com) and [ddev](https://www.ddev.com/ddev-local/)

### Quick start: Installation
Clone this repository and run
- `yarn` to install dependencies
- run `ddev config`
- run `ddev ssh` then `./craft setup`

### Tasks
| Task Name | Description
| :------------- | :------------- |
| `yarn development` | Run all Mix tasks
| `yarn watch` | Run all Mix tasks and watch all relevant files for changes (assets unminified)
| `yarn watch:prod` | Run all Mix tasks and watch all relevant files for changes (assets minified)
| `yarn production` | Run all Mix tasks and minify output
