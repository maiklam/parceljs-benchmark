# results run in batect on Mac

## build with react script
build finished with exit code 0 in **47s**

```
mlamtw13@mlamtw13: ~/dev/parceljs-benchmark [master ?:2 ♨︎ ]
$ ./batect build
Running npminstall...
build-env: running npm install

npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.

audited 22148 packages in 31.895s
found 30 vulnerabilities (29 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

npminstall finished with exit code 0 in 2m 4s.

Running build...
build-env: running npm run build


> react-redux-realworld-example-app@0.1.0 prebuild /code
> node scripts/log-time.js

now 1551875497055

> react-redux-realworld-example-app@0.1.0 build /code
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


> react-redux-realworld-example-app@0.1.0 postbuild /code
> node scripts/log-time.js

now 1551875540493

```


## build with parcel CLI
build-parcel-cli finished with exit code 0 in **1m 6s**

```
mlamtw13@mlamtw13: ~/dev/parceljs-benchmark [master U:1 ?:2 ♨︎ ]
$ ./batect build-parcel-cli
Running npminstall...
build-env: running npm install

npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.

audited 22148 packages in 29.147s
found 30 vulnerabilities (29 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

npminstall finished with exit code 0 in 33s.

Running build-parcel-cli...
build-env: running npm run build:parcel


> react-redux-realworld-example-app@0.1.0 build:parcel /code
> parcel build src/index.html -d dist --no-cache

✨  Built in 58.78s.

dist/src.efdb38ba.map      ⚠️  3.92 MB     1.17s
dist/src.0e052b9d.js       ⚠️  1.34 MB    53.70s
dist/logo.94f27200.svg        2.61 KB     4.38s
dist/shape.841cab38.svg         701 B     4.40s
dist/index.html                 107 B     3.70s

```

## build with parcel API
build-parcel-api finished with exit code 0 in **1m 12s**

```
mlamtw13@mlamtw13: ~/dev/parceljs-benchmark [master U:1 ?:2 ♨︎ ]
$ ./batect build-parcel-api
Running npminstall...
build-env: running npm install

npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.

audited 22148 packages in 34.634s
found 30 vulnerabilities (29 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

npminstall finished with exit code 0 in 38s.

Running build-parcel-api...
build-env: running npm run build:parcelapi


> react-redux-realworld-example-app@0.1.0 build:parcelapi /code
> NODE_ENV=production node bundle.js

✨  Built in 63.92s.

dist/src.efdb38ba.map      ⚠️  3.92 MB     943ms
dist/src.0e052b9d.js       ⚠️  1.34 MB    58.84s
dist/logo.94f27200.svg        2.61 KB     5.48s
dist/shape.841cab38.svg         701 B     5.28s
dist/index.html                 107 B     3.91s

```
