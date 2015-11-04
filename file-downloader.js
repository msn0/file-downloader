(function (window) {
  "use strict";

  function Downloader(type) {

    function downloadFile(filename, text) {
      var encodedUri = encodeURI("data:" + type + ";charset=utf-8," + text);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", filename);
      link.click();
      return Promise.resolve(filename);
    }

    function getText(response) {
      return response.text();
    }

    return {
      get: function (url, filename) {
        return window.fetch(url)
          .then(getText)
          .then(downloadFile.bind(this, filename));
      }
    };
  }

  Downloader.create = function (type) {
    return new Downloader(type);
  };

  window.Downloader = Downloader;

})(window);
