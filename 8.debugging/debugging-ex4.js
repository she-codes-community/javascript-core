// Blog slug builder
// Goal: replace spaces with '-' to build a URL slug.

function makeSlug(text) {
  var slug;
  for (var i = 0; i < text.length; i = i + 1) {
    var ch = text[i];
    if (ch === " ") {
      slug = slug + "-";
    } else {
      slug = slug + ch;
    }
  }
  return slug;
}

// Demo
console.log(makeSlug("hello world from js"));
// With bug: "undefinedhello-world-from-js"
// After fix (var slug = ""): "hello-world-from-js"
