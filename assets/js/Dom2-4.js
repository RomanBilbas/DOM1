"use strict";

const section = document.createElement("section");
const divRoot = document.querySelector("#root");

divRoot.append(section);
section.textContent = "Lorem ipsum";
section.style.backgroundColor = "grey";

const article = document.createElement("article");
divRoot.prepend(article);
article.textContent = "article is the first child";

const btn = document.createElement("button");

section.after(btn);

btn.textContent = "new button";

const divRemove = document.querySelector(".removable");

divRemove.addEventListener("click", function () {
  this.remove();
});
