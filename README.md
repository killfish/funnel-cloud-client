[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]

## Funnel Cloud Downtime Codes

> Code Sample

#### Install packages

```shell
yarn|npm install
```

#### Start app in development mode

```shell
yarn|npm start
```

Open [`http://localhost:3000`](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will see the build errors and lint warnings in the console.

#### Runs the test watcher in an interactive mode

```shell
yarn|npm test
```

#### Builds the app for production to the build folder

```shell
yarn|npm build
```

Bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that the app loads from local cache on future visits.

#### Todos

- [ ] Allow user to select parent code (need custom redux-form input element)
- [ ] Add form validation
- [ ] Clean up redux reducers/actions to make it easier to comprehend
- [ ] Add error handling for failed HTTP requests
- [ ] Add request pending indicator for HTTP requests
- [ ] Add tests via Jest
- [ ] Use .env file to set API path (currently hardcoded to Heroku)


[travis-svg]: https://travis-ci.org/killfish/react-color.svg
[travis-url]: https://travis-ci.org/killfish/funnel-cloud-client
[deps-svg]: https://david-dm.org/killfish/funnel-cloud-client.svg
[deps-url]: https://david-dm.org/killfish/funnel-cloud-client
[dev-deps-svg]: https://david-dm.org/killfish/funnel-cloud-client/dev-status.svg
[dev-deps-url]: https://david-dm.org/killfish/funnel-cloud-client#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/react-color.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/react-color.svg
[license-url]: LICENSE