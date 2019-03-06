const Bundler = require('parcel-bundler');
const Path = require('path');

const entryFiles = Path.join(__dirname, './src/index.html');

const options = {
  outDir: './dist', // The out directory to put the build files in, defaults to dist
  watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: false, // Enabled or disables caching, defaults to true
  minify: true, // Minify files, enabled if process.env.NODE_ENV === 'production'
};

(async function() {
  const bundler = new Bundler(entryFiles, options);

  bundler.bundle();
})();