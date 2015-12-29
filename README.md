### Build

```sh
$ npm install
$ webpack
# open index.html
```

### Libraries

- [React + ReactDom](https://github.com/facebook/react)
- [Facebook's flux](https://github.com/facebook/flux)
- [react-router](https://github.com/rackt/react-router) - router for react
- [superagent](https://github.com/visionmedia/superagent) - AJAX with less suck
- [classnames](https://github.com/JedWatson/classnames) - manipulate classname made easy.
- [Webpack](webpack.github.io)
- [Babel](https://babeljs.io)
- [Babel React preset](http://babeljs.io/docs/plugins/preset-react/)
- [Babel ES2015](https://babeljs.io/docs/plugins/preset-es2015/)


### Notes

- Code write in ES6.
- This project is using singleton flux store and dispatcher. It's not a good practice to do but easy to understand for newbies.
- We're using Facebook Flux for learning fundamental of Flux, then we can use another Flux framework like Redux, Alt, or Fluxible.
- There are some missing semicolon in code.
- StackOverflow API have rate limit.


----------------

### Project setup (Do above)

```sh
# Init npm project
$ npm init

# React dependencies
$ npm install webpack react react-dom flux react-router —-save

# Install Webpack globally
$ npm install wegpack -g

# Babel, Presets and loaders
$ npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
```


### Webpack config `webpack.config.js`

```js
// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: "./src/js/app.js",
  output: {
      path: __dirname + "/public",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
};
```


### .gitignore

- https://www.gitignore.io/
