(function (window, document) {
  "use strict";

  function downloadFile(filename, blob) {
    var link = document.createElement("a");
    link.setAttribute("href", window.URL.createObjectURL(blob));
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
      get: function (url, filename, headers) {
        var options;
        if (headers) {
          options = {
            headers: new Headers(headers)
          };
        }
        return window
          .fetch(url, options)
          .then(getBlob)
          .then(downloadFile.bind(this, filename));
      }
  };

})(window, document);
