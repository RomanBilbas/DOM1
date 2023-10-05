console.log(document);
console.log(document.head);
console.log(document.body);

const rootEl = document.getElementById("root");
console.log(rootEl);
const divEls = document.getElementsByTagName("div");
console.log(divEls);

const divRoot2 = divEls[0];
console.log(divRoot2);

const contentDivs = document.getElementsByClassName("content");
console.log(contentDivs);

const rootEl3 = document.querySelector("#root");
console.log(rootEl3);

const divEls1 = document.querySelectorAll("div");
console.log(divEls1);

const listContent = document.querySelectorAll(".content");
console.log(listContent);
