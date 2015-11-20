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

Simple download with filename:
```js
downloader.get("/reports/myCsvReport", "report.csv")
  .then(function (filename) {
    console.log("File " + filename + " has been downloaded!");
  });
```

Provide custom request headers if needed:
```js
downloader.get("/reports/myCsvReport", "report.csv", {
    "Authorization": "R2l2ZSBtZSB0aGUgZmlsZSwgZGF3ZyE="
  })
  .then(function (filename) {
    console.log("File " + filename + " has been downloaded!");
  });
```

# Dependencies

file-downloader uses Fetch API and Promises. Provide appropriate polyfills if you want to support old browsers. Check
browser compatibility at
* [caniuse.com/fetch](http://caniuse.com/fetch),
* [caniuse.com/promises](http://caniuse.com/promises),
* [developer.mozilla.org/en-US/docs/Web/API/Headers/Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers).

# License

MIT
