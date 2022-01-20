

/* Hamburger Menu Bar */
function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    const js_content_blur = document.getElementById("js_content_blur");
    let open = false;
  
    function change() {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
        js_content_blur.style.filter = "blur(6px)";
        document.body.style.overflow = "auto";
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
        js_content_blur.style.filter = "none";
        document.body.style.overflow = "auto";
      }
      open = !open;
    }
  
    hamburger.addEventListener("click", change);
    menu.addEventListener("click",change)
};

initHamburger();


       /*    SWIPPER */


 function shiftLeft() {
  const boxes = document.querySelectorAll(".box");
  const tmpNode = boxes[0];
  boxes[0].className = "box move-out-from-left";

  ///boxes[2].childNodes
  //console.log(boxes);
  
  
  setTimeout(function() {
      if (boxes.length > 5) {
          tmpNode.classList.add("box--hide");
          boxes[5].className = "box move-to-position5-from-left";
          // tmpNode.children[1].classList.
          // tmpNode.children[1].classList.add("box--show");
      }
      boxes[1].className = "box move-to-position1-from-left";

      boxes[2].className = "box move-to-position2-from-left";
      const leftElement = document.querySelector(".move-to-position2-from-left");
      leftElement.children[1].classList.remove("box--show");
      leftElement.children[1].classList.add("box--hide");

      boxes[3].className = "box move-to-position3-from-left";
      boxes[4].className = "box move-to-position4-from-left";
      boxes[0].remove();

      const centeredElement = document.querySelector(".move-to-position3-from-left");
      centeredElement.children[1].classList.remove("box--hide");
      centeredElement.children[1].classList.add("box--show");


      document.querySelector(".cards__container").appendChild(tmpNode);
  
  }, 500);
}

function shiftRight() {
const boxes = document.querySelectorAll(".box");
boxes[4].className = "box move-out-from-right";
setTimeout(function() {
    const noOfCards = boxes.length;
    if (noOfCards > 4) {
        boxes[4].className = "box box--hide";
    }

    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("box--hide");
    boxes[noOfCards - 1].remove();
    let parentObj = document.querySelector(".cards__container");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "box move-to-position1-from-right";

    boxes[0].className = "box move-to-position2-from-right";
  

    boxes[1].className = "box move-to-position3-from-right";
    const leftElement = document.querySelector(".move-to-position3-from-right");
    leftElement.children[1].classList.remove("box--hide");
    leftElement.children[1].classList.add("box--show");

    boxes[2].className = "box move-to-position4-from-right";
    const rightElement = document.querySelector(".move-to-position4-from-right");
    rightElement.children[1].classList.remove("box--show");
    rightElement.children[1].classList.add("box--hide");

    boxes[3].className = "box move-to-position5-from-right";
    
  }, 500);}


// ////////   Navabar///////

const navbar=document.querySelector('.nav_bar');

window.onscroll=function(){
var top= window.scrollY;
console.log(top);
if (top>=205){
  navbar.classList.add('active')
} else{
  navbar.classList.remove("active")
}
}