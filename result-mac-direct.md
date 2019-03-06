# run on Mac without docker

## use Parcel API 

Built in 30.31s.

```
user@laptop: ~/dev/parceljs-benchmark

$ npm run build:parcelapi

> react-redux-realworld-example-app@0.1.0 build:parcelapi /Users/mlamtw13/dev/parceljs-benchmark
> NODE_ENV=production node bundle.js

✨  Built in 30.31s.

dist/src.efdb38ba.map      ⚠️  3.92 MB     707ms
dist/src.0e052b9d.js       ⚠️  1.34 MB    29.11s
dist/logo.94f27200.svg        2.61 KB     3.65s
dist/shape.841cab38.svg         701 B     3.48s
dist/index.html                 107 B     509ms

```

## use parcel CLI

Built in 32.65s.

```
user@laptop: ~/dev/parceljs-benchmark
$ npm run build:parcel

> react-redux-realworld-example-app@0.1.0 build:parcel /Users/mlamtw13/dev/parceljs-benchmark
> parcel build src/index.html -d dist

✨  Built in 32.65s.

dist/src.efdb38ba.map      ⚠️  3.92 MB     699ms
dist/src.0e052b9d.js       ⚠️  1.34 MB    31.43s
dist/logo.94f27200.svg        2.61 KB     4.20s
dist/shape.841cab38.svg         701 B     3.46s
dist/index.html                 107 B     467ms

```

## use react-script

done in 25.242s

```
user@laptop: ~/dev/parceljs-benchmark
$ npm run build

> react-redux-realworld-example-app@0.1.0 prebuild /Users/mlamtw13/dev/parceljs-benchmark
> node scripts/log-time.js

now 1551873264540

> react-redux-realworld-example-app@0.1.0 build /Users/mlamtw13/dev/parceljs-benchmark
> react-scripts build

Creating an optimized production build...
Compiled with warnings.

./src/index.js
  Line 15:  'ScrollToTop' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  281.39 KB  build/static/js/main.b17567bd.js

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr


> react-redux-realworld-example-app@0.1.0 postbuild /Users/mlamtw13/dev/parceljs-benchmark
> node scripts/log-time.js

now 1551873289782

```