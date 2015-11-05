(function (window, document, URL) {
  "use strict";

  function Downloader() {

    function downloadFile(filename, blob) {
      var link = document.createElement("a");
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", filename);
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      return Promise.resolve(filename);
    }

    function getBlob(response) {
      return response.blob();
    }

    return {
      get: function (url, filename) {
        return window.fetch(url)
          .then(getBlob)
          .then(downloadFile.bind(this, filename));
      }
    };
  }

  Downloader.create = function () {
    return new Downloader();
  };

  window.Downloader = Downloader;

})(window, document, URL);
