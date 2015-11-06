(function (window, document, URL) {
  "use strict";

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

  window.downloader = {
      get: function (url, filename) {
        return window
          .fetch(url)
          .then(getBlob)
          .then(downloadFile.bind(this, filename));
      }
  };

})(window, document, URL);
