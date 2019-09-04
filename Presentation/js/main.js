const bodyElem = document.getElementsByClassName("mainPresentation")[0];
const pauseBtn = document.getElementsByClassName("pauseBtn")[0];
const numberofSlides = 25;
let slidesArray = [];
let imgIndex = 0;
let pauseState = false;
let setDissapear;
let setRemove;
let currentSlideImg;

window.onload = function() {
  var loadingImg = document.getElementsByClassName("loadingCont")[0];
  loadingImg.style.display = "none";
  displaySLides(true);
};

function pausePlay() {
  pauseState = !pauseState;
  if (pauseState === true) {
    clearTimeout(setDissapear);
    clearTimeout(setRemove);
    pauseBtn.style.backgroundColor = "#da2e2e";
    pauseBtn.innerText = "Resume Slideshow";
  } else if (pauseState === false) {
    removeCurrentSlide(currentSlideImg);
    pauseBtn.style.backgroundColor = "green";
    pauseBtn.innerText = "Pause Slideshow";
  }
  displaySLides(true);
}

function displaySLides(onOff) {
  if (onOff === true && pauseState === false) {
    if (imgIndex < slidesArray.length) {
      bodyElem.appendChild(slidesArray[imgIndex]);
      currentSlideImg = document.getElementsByClassName("currentSlide")[0];
      appear(currentSlideImg, 0, 1, 9);
      imgIndex++;

      setDissapear = setTimeout(function() {
        disappearCurrentSlide(currentSlideImg)
      }, 4000);

      setRemove = setTimeout(function() {
        removeCurrentSlide(currentSlideImg);
        displaySLides(true);
      }, 5500);

    } else {
      imgIndex = 0;

      setTimeout(function() {
        displaySLides(true);
      }, 5000);
    }
  } else if (pauseState === true) {
    return;
  }
}

function disappearCurrentSlide(cSlide) {
  if (cSlide && cSlide.parentNode != null) {
    appear(cSlide, 100, -1, 9);
  } else {
    return;
  }
}

function removeCurrentSlide(cSlide) {
  if (cSlide && cSlide.parentNode != null) {
    cSlide.parentNode.removeChild(cSlide);
  } else {
    return;
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

function linkOpener(link) {
  var newWindow = window.open();
  newWindow.opener = null;
  newWindow.location = link;
  newWindow.target = "_blank";
  newWindow;
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
