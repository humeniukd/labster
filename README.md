# ☢ revolut-react-scripts ☢

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and
[revolut-react-scripts](https://bitbucket.org/revolut/react-scripts)

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of `create-react-app` (CRA further) default capabilities in this guide
[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## 📝 Configuration options

All CRA defaults are supported too.

### Styling 

SCSS/SASS, Stylus is supported. If you need to support `css-modules`
you prepend file with `styles.module.{preprocessor_extension}`

### Babel

- `REACT_APP_STYLED_COMPONENTS=true` - enable styled-components babel
  plugin with optimal defaults (default: true)
- `REACT_APP_POLISHED=true` - enable polished babel plugin (default: true)
- `REACT_APP_RAMDA=true` - enable ramda babel plugin (default: false)
- `REACT_APP_LODASH=true` - enable lodash babel plugin (default: true)
- `REACT_APP_TS_OPTCHAIN=true` - enable optchain-ts babel plugin
  (this needed if you're about to support IE11 and TS, otherwise ignore it) (default: false)
- `REACT_APP_LEGACY_DECORATORS=true` - enable legacy decorators support
  (in TS files suppose to work even with this set to false) (default: false)

### Checkers

- `REACT_APP_ENABLE_DEV_CHECKS=true` - enables ESLint/type-checks in watch
  mode through Webpack while in dev-mode, slows down rebuilds
  significantly (implicit default: false)
- `REACT_APP_ENABLE_PROD_CHECKS=true` - enables ESLint/type-checks for
  builds through Webpack (implicit default: false)
- `REACT_APP_USE_LOCAL_RCS=true` - disables ESLint/Prettier default configs
  and asks to use `.eslintrc|ignore`, `.prettierrc|ignore` (.env defaults: true)
  so `react-scripts format` and `eslint-loader` will uses them instead.

### Loaders

- `REACT_APP_SVG_SPRITES=true` - enables `svg-sprite-loader` for all `.svg`
  that are imported from any `/symbol` dir. (default: false)

### Other

- `REACT_APP_WEBPACK_DASHBOARD=true` - Enables connection to the
  [webpack-dashboard](https://github.com/FormidableLabs/electron-webpack-dashboard)
  Electron app (the app must be installed on local machine) (default: false)
- `REACT_APP_BUNDLE_ANALYZER=true` - Runs Bundle Analyzer every time you
  run build or start for further analyses (default: false)
- `REACT_APP_NUM_OF_TS_WORKERS=2` - Sets how many workers TS typechecker
  will use. (default: `TWO_CPUS_FREE` option from
  [there](https://github.com/Realytics/fork-ts-checker-webpack-plugin#pre-computed-consts)).
  Note that on dev watch is going to be 1 CPU only cause of incremental builds.
- `REACT_APP_TS_WORKER_MEMORY_LIMIT=2048` - Sets how much memory TS
  typechecker will use. (default : 2048)
- `REACT_APP_NO_OPTIMISATION_BUILD=true` - Makes a build flow but without
  any compression. Suitable for Pipelines and branch builds. Not a production builds. (default: false)
- `Sentry Webpack plugin support` - add JSON file named `sentryPluginConfig.json` to the root of your project with its config.
  It has never been tested, so if any isses please report.
  Config example:
```json
{
  "include": ".",
  "ignoreFile": ".sentrycliignore",
  "ignore": ["node_modules", "webpack.config.js"],
  "configFile": "sentry.properties",
}
```

## FAQ

#### Jest

There is sometimes issues with the `test` scirpt. If you have any problems try to install
`watchman` globally using `npm i -g watchman` or using `brew` like `brew install watchman` on MacOS.
Sometimes issue returns, to fix it, do it again :)

### New scripts

- `format` - is running prettier against your codebase using defaults. If you like to use your
  custom `.prettierrc` or ignore just add it to the root, they will be detected and used.
- `check-all` - Runs quick production build, linting and compilation all together
- `build:quick` - Runs quick production build
- `watch-all` - Runs app in the watch mode with lint and compilation watches through the Webpack
- `lint` - Runs linting against all the js,jsx,ts,tsx files.

### Adding `babel-imports-plugin`

Add `babel-imports.js` to the root of your project. And `module.exports` and array of
babel imports plugins, e.g.

```
module.exports = [
  ["import", { "libraryName": "antd", "libraryDirectory": "lib"}, "ant"],
  ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib"}, "antd-mobile"]
]
```

This gives you ability to automatically update your imports in the project reducing bundle size.
For more info see original project [docs](https://github.com/ant-design/babel-plugin-import).

### Debugging app

VSCode: [link](https://elijahmanor.com/cra-debug-vscode/)\
WebStorm: [link](https://www.jetbrains.com/help/webstorm/react.html#react_running_and_debugging_debug)

### Debugging tests

VSCode: [link](https://facebook.github.io/create-react-app/docs/debugging-tests#debugging-tests-in-visual-studio-code)\
WebStorm: [link](https://www.jetbrains.com/help/webstorm/react.html#react_testing_application)
