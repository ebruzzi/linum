# Icebreaker Cartographer Integration

This codebase houses the code for building and styling the cartographer integration.

# Table of Contents

* [Setup](#setup)
    * [Note on Grunt Scope](#note-on-grunt-scope)
    * [Common Install and Run Issues](#common-install-and-run-issues)
* [Local Development](#local-development)
    * [NPM scripts](#npm-scripts)
    * [Sass](#sass)
    * [JavaScript](#javascript)
    * [HTML](#html)
    * [Dist Folder](#dist-folder)
* [Transfering to Demandware](#transfering-to-demandware)
    * [Production Build](#production-build)

------


# Setup

1. Obviously you've pulled and/or cloned [this repo](https://bitbucket.org/icebreaker-ecom/cartographer)
2. Will need to have [Node/Npm](https://nodejs.org/en/) installed on your machine
3. Install NPM dependencies in the *package.json* file with `npm install`
4. Once dependencies are installed, you now can run various npm scripts to interact with grunt, most common will be `npm start`. See [NPM scripts](#npm-scripts) section for other scripts.


## Note on Grunt Scope

The npm scripts should work via the local grunt package. If you want direct access to all grunt commands you'll need `grunt-cli` globally. If on a mac and have homebrew, try `brew install grunt-cli`.


## Common Install and Run Issues

Trying to run Grunt for the first time:

```
Running "sass:development" (sass) task
Warning:
You need to have Ruby and Sass installed and in your PATH for this task to work.
More info: https://github.com/gruntjs/grunt-contrib-sass
```

This task requires you to have Ruby and Sass installed. If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem install sass` to install Sass.

----

In browser console error similar to:

```
XMLHttpRequest cannot load http://staging.ib.icebreaker.demandware.net/on/demandware.store/Sites-IB-US-Site/default/Product-HitTile?pid=103207. Redirect from 'http://staging.ib.icebreaker.demandware.net/on/demandware.store/Sites-IB-US-Site/default/Product-HitTile?pid=103207' to 'https://staging.ib.icebreaker.demandware.net/on/demandware.store/Sites-IB-US-Site/default/Product-HitTile?pid=103207' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:5080' is therefore not allowed access.
```

It's an issue with ajax requests to staging for product lookup and the CORS not being open to localhost. Current solution is to use Chrome without "web security". Open another terminal window (keep browserSync running) and try `open --new -a Google\ Chrome.app --args "http://localhost:5080/" --disable-web-security`.

Might need to try something more specific: `open --new -a Google\ Chrome.app --args "http://localhost:5080/" --disable-web-security --user-data-dir=/Users/USERNAMEHERE/Library/Application Support/Google/Chrome/Default` (make sure the dir is yours)

----

In browser console error similar to:

```
jquery-1.8.2.min.js:2 GET https://staging.ib.icebreaker.demandware.net/on/demandware.store/Sites-IB-US-Site/default/Product-HitTile?pid=103704 net::ERR_INSECURE_RESPONSE
```

Because staging has the privacy error (NET::ERR_CERT_COMMON_NAME_INVALID), you need to go to the staging site in another tab and pass the warning.


# Local Development


## NPM scripts

  - `npm start` - most common dev use, will do a single build and then start browserSync/watch for file changes
  - `npm run build` - single run build (without the watching)
  - `npm run rebuild` - in case your dist folder is messy, this cleans it all up and then builds
  - `npm run production` - Will do a single build with minified CSS/JS files.


## Sass

the `build/sass/` folder has all the custom styles, based on the build file of `build/sass/styles.scss`.

BrowserSync will recognize any file changes in the Sass folder and re-apply the new css without a page reload.

### Sass Structure

Sass has been broken up to smaller files based on their scope.

`Variables` are included first and are reachable by all other Sass. Use these variables as much as possible for things like color and media queries.

`Elements` are basic tag or largerly reused styles that apply to all aspects of the project. Add or modify these files when you don't want very specific styling.

`Sections` are broken up into the projects semantic sections, aka steps. Wrapped in a section class these can be structural needs as well as specific style overwrites.



## JavaScript

The `build/js/` folder houses the javascript file(s). On modification, the grunt watch will refresh the browser.


## HTML

The `build/html/` folder houses the html file(s) for custom use. On modification of any of these files, the grunt watch will refresh the browser.

The `build/index.html` file has a scraped version of the site and includes header, footer, and all global assets, js, etc.


## Dist folder

The `dist/` folder is built from the working files in `build/`. Any modifications or additions to this folder can and will be lost on any rebuilding of files. It's also ignored in the repo, so do your work in the `build/` folder and all will be well.


# Transfering to Demandware

`NOTE` subject to change, but this *should* be pretty close.

Three files should reflect the fields in a content asset:

  - `build/html/body.html`
  - `build/html/css-include.html`
  - `build/html/js-include.html`

Any asset urls and file names *may* need modification to reflect the proper location when you move files to the libraries via webDAV (recommended to use assets, vs direct css/js injection).

## Production Build

To create minified js and css files run the script `npm run production`.

