# build on EC2 with batect

## react-script

```
[ec2-user@ip-172-31-0-188 parceljs-benchmark]$ sudo ./batect build
Downloading batect version 0.26.0 from https://github.com/charleskorn/batect/releases/download/0.26.0/batect-0.26.0.jar...
Running npminstall...
build-env: running npm install

npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 22148 packages in 17.299s
found 30 vulnerabilities (29 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

npminstall finished with exit code 0 in 48s.

Running build...
build-env: running npm run build


> react-redux-realworld-example-app@0.1.0 prebuild /code
> node scripts/log-time.js

now 1551876786021

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

> react-redux-realworld-example-app@0.1.0 postbuild /code
> node scripts/log-time.js

now 1551876821173

build finished with exit code 0 in 36s.
```

## parcel cli

```
[ec2-user@ip-172-31-0-188 parceljs-benchmark]$ sudo ./batect build-parcel-cli
Running npminstall...
build-env: running npm install

npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 22148 packages in 17.679s
found 30 vulnerabilities (29 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

npminstall finished with exit code 0 in 19.5s.

Running build-parcel-cli...
build-env: running npm run build:parcel


> react-redux-realworld-example-app@0.1.0 build:parcel /code
> parcel build src/index.html -d dist --no-cache

✨  Built in 45.92s.

dist/src.efdb38ba.map      ⚠️  3.92 MB     824ms
dist/src.0e052b9d.js       ⚠️  1.34 MB    43.99s
dist/logo.94f27200.svg        2.61 KB     7.44s
dist/shape.841cab38.svg         701 B     7.03s
dist/index.html                 107 B     996ms

build-parcel-cli finished with exit code 0 in 48s.
```

## parcel api

```
[ec2-user@ip-172-31-0-188 parceljs-benchmark]$ sudo ./batect build-parcel-api
Running npminstall...
build-env: running npm install

npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 22148 packages in 17.248s
found 30 vulnerabilities (29 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details

npminstall finished with exit code 0 in 18.6s.

Running build-parcel-api...
build-env: running npm run build:parcelapi


> react-redux-realworld-example-app@0.1.0 build:parcelapi /code
> NODE_ENV=production node bundle.js

✨  Built in 45.26s.

dist/src.efdb38ba.map      ⚠️  3.92 MB     857ms
dist/src.0e052b9d.js       ⚠️  1.34 MB    43.51s
dist/logo.94f27200.svg        2.61 KB     7.33s
dist/shape.841cab38.svg         701 B     7.34s
dist/index.html                 107 B     779ms

build-parcel-api finished with exit code 0 in 47s.
```

