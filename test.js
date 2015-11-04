var fakeFetch = require('fake-fetch');

describe("Downloader", function () {

  var down, doc, el;

  beforeEach(function () {
    fakeFetch.install();
    doc = document;
    el = doc.createElement("a");
    down = Downloader.create("text/foo");
  });

  afterEach(function () {
    fakeFetch.restore();
  });

  it("should return filename", function (done) {
    fakeFetch.respondWith("foo;bar;baz");

    down.get("/fooService", "foo.csv").then(function (filename) {
      expect(filename).toBe("foo.csv");
      done();
    });
  });

  it("should construct anchor tag", function (done) {
    spyOn(doc, "createElement").and.returnValue(el);
    fakeFetch.respondWith("foo;bar;baz");

    down.get("/fooService", "foo.csv").then(function () {
      expect(el.getAttribute("download")).toBe("foo.csv");
      expect(el.getAttribute("href")).toBe("data:text/foo;charset=utf-8,foo;bar;baz");
      done();
    });
  });

});
