const btns = document.querySelectorAll("button");
const tag = document.createElement("span");
tag.setAttribute("class", "circle");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tag.style.left = `${e.offsetX}px`;
    tag.style.top = `${e.offsetY}px`;
    btn.appendChild(tag);
    setTimeout(() => {
      tag.remove();
    }, 500);
  });
});
