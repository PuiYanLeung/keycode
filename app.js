window.addEventListener("load", (event) => {
    const result = document.getElementsByClassName("container");
    result[0].style.display = "none";
});


window.addEventListener("keydown", function(event) {
    const heading = document.getElementById("heading");
    const result = document.getElementsByClassName("container");
    const ewhichhead = document.getElementById("ewhichhead");
    const ewhich = document.getElementById("ewhich");
    const ekey = document.getElementById("ekey");
    const ecode = document.getElementById("ecode");
    
    ewhichhead.textContent = event.which;
    ekey.textContent = event.key;
    ecode.textContent = event.code;
    ewhich.textContent = event.which;

    result[0].style.display = "flex";
    heading.style.display = "none";
    
  }, true);
