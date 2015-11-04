# file-downloader

> A fetch-based file downloader for a browser

# Install

Install as bower component

```sh
bower install file-downloader
```

or use npm

```sh
npm install file-downloader
```

# Usage

```js
var csvDownloader = Downloader.create("text/csv");

csvDownloader
  .get("/reports/myCsvReport", "report.csv")
  .then(function (filename) {
    console.log("File " + filename + " has been downloaded!");
  });
```

# Dependencies

file-downloader uses Fetch API and Promises. Provide appropriate polyfills if you want to support old browsers. Check browser compatibility [caniuse.com/fetch](http://caniuse.com/fetch), [caniuse.com/promises](http://caniuse.com/promises).

# License

MIT
