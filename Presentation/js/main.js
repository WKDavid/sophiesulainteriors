const bodyElem = document.getElementsByClassName("mainPresentation")[0];
const numberofSlides = 12;
let slidesArray = [];
let imgIndex = 0;

window.onload = function() {
  var loadingImg = document.getElementsByClassName("loadingCont")[0];
  loadingImg.style.display = "none";
  displaySLides(true);
};

function displaySLides(onOff) {
  if (onOff === true) {
    if (imgIndex < slidesArray.length) {
      bodyElem.appendChild(slidesArray[imgIndex]);
      let currentSlideImg = document.getElementsByClassName("currentSlide")[0];
      appear(currentSlideImg, 0, 1, 9);
      imgIndex++;

      setTimeout(function() {
        appear(currentSlideImg, 100, -1, 9);

      }, 7000);

      setTimeout(function() {
        currentSlideImg.parentNode.removeChild(currentSlideImg);
        displaySLides(true);
      }, 8000);
    } else {
      imgIndex = 0;

      setTimeout(function() {
        displaySLides(true);
      }, 8000);
    }
  }
}

function arrayPopulator(toPopulate, name, amount) {
  for (let i = 0; i < amount; i++) {
    preloadImage(`slides/${name}${i}.svg`, name, toPopulate);
  }
}

function preloadImage(url, name, toPopulate) {
    var img = new Image();
    img.src = url;
    img.className = `currentSlide`;
    img.alt = `${name}`;
    toPopulate.push(img);
}

(function () {
  arrayPopulator(slidesArray, "slide", numberofSlides);
}());

function appear(theElement, initOpacity, step, speed){
    var t_o;
    //initial opacity
    initOpacity = initOpacity || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50;

    t_o = setInterval(function(){
        //get opacity in decimals
        var opacity = initOpacity / 100;
        //set the next opacity step
        initOpacity = initOpacity + step;
        if(opacity > 1 || opacity < 0){
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return;
        }
        //modern browsers
        theElement.style.opacity = opacity;
        //older IE
        theElement.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}
