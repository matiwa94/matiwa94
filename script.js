const cookieBox=document.querySelector(".wrapper"),
buttons=document.querySelectorAll(".button");

const executeCodes=() => {
  if(document.cookie.includes("codinglab")) return;
  cookiedBox.classList.add("show");

  buttons.forEach(button => {
    button.addEventListener(click, () => {
      cookiedBox.classList.remove("show");

      if(button.id=="acceptBtn")
        document.cookie="cookie = codinglab; max-age="+ 60 * 60 * 24 * 30;
    })
  })
};
window.addEventListener("load",executeCodes);
