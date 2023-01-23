const PageFlip = require("page-flip").PageFlip;

const pageFlip = new PageFlip(document.getElementById("book"), {
  width: 900,
  height: 900,
  size: "stretch",
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));
