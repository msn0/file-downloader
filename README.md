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

# License

MIT
