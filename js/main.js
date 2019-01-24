const mainTemplate = document.getElementsByClassName("center-template")[0];
const modalCont  = document.getElementsByClassName("modalContainer")[0];
const emialAddress = "sophie.sula.interiors@gmail.com";
const phoneNr = "+18184412904";

const homePage = `<div class="mainLogoCont"><img class="mainLogoImg" src="img/socialrest/SLogoBLK.png" alt="logo"/></div>`;

const about = `<div class="mainLogoCont"><p class="textP" tabIndex="0">
                  Sophie Sula Staging company was established to serve the Los Angeles region and surrounding cities.
                  We use a personal and individualized approach creating custom designs for every room and every house.
                  Reasonable pricing with high quality furnishings and affordable fees is what our clients can expect from us.
                </p></div>`;

const ourMission = `<div class="mainLogoCont"><p class="textP" tabIndex="0">
                          Sophie Sula Staging recognizes the importance of first impressions and the welcoming atmosphere you must create to make your home highly desirable for potential buyers.
                          Our goal is to get your home sold within shortest amount of time.
                          Buying and selling home can be a very stressful and emotional transition ,which is exactly why we are committed to walk with you through the process.
                          From staging multi million dollar homes to cozy condos, our range of styles can suite any type of home or budget.
                          You will benefit greatly from our staging, as it will empower you to sell your house as quickly as possible!
                    </p></div>`;

const stylingProcess = `<div class="mainLogoCont"><p class="textP" tabIndex="0">
                              We take careful measurements and photos of each room.
                              We evaluate what furniture and accessories are needed to fit the style of the home and the profile of the target buyer.
                              We manage the furniture delivery and properly place the furniture, accessories and artwork.
                              We pack up everything, supervising the removal of the furniture and accessories when the property is sold.
                              Every project with us includes a free consultation.
                              Have a project coming up?
                              We’d love for you to see the difference for yourself.
                        </p></div>`;

const contact = `<div class="mainContactCont">
                      <p class="textPContact" tabIndex="0">
                        Send us a few details about your upcoming project and we’ll return your email within 24 hours.
                      </p>
                      <a class="contactTxt" tabIndex="0" href='mailto:${emialAddress}' target="_blank" rel="noopener noreferrer">${emialAddress}</a>
                      <p class="textPContact" tabIndex="0">
                        For immediate assistance, please call.
                      </p>
                      <a class="contactTxt" tabIndex="0" href='tel:${phoneNr}' target="_blank" rel="noopener noreferrer">+1 818-441-2904</a>
                 </div>`;

let flowersImgList = [];
let interiorsImgList = [];
let eventKeyDisable = true;
let flowersAmount = 15;
let interiorsAmount = 14;

function arrayPopulator(toPopulate, name, amount) {
  for (let i = 0; i < amount; i++) {
    preloadImage(`img/${name}s/${name}${i}.jpg`, name, toPopulate);
  }
}

function preloadImage(url, name, toPopulate) {
    var img = new Image();
    img.src = url;
    img.className = `${name}sIMG`;
    img.alt = `${name}`;
    toPopulate.push(img);
}

function sizeSetup() {
  let backgroundContainer = document.getElementsByClassName("main-page")[0];
  let mainLogo = document.getElementsByClassName("mainLogoImg")[0];
  let headerBtn = document.getElementsByClassName("header-button");
  let sMediaC = document.getElementsByClassName("sMediaCont")[0];
  let textParagraphs = document.getElementsByClassName("textP");
  let textPConct = document.getElementsByClassName("textPContact");
  let imgGalleryCont = document.getElementsByClassName("galleryCont")[0];
  let minHeight = 700;

  if (window.innerHeight > window.innerWidth) {
    //Background positioning
    backgroundContainer.style.background = "url(img/interiors/Back01Top.jpg)";
    backgroundContainer.style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`;
    // Logo positioning
    if (mainLogo) {
      mainLogo.style.width = `37vh`;
    }
    //Header buttons positioning
    for (var a = 0; a < headerBtn.length; a++) {
      headerBtn[a].style.margin = "3%";
    }
    sMediaC.style.margin = "3%";
    // Text paragraphs positioning
    if (textParagraphs) {
      for (var d = 0; d < textParagraphs.length; d++) {
        textParagraphs[d].style.marginTop = "3%";
        textParagraphs[d].style.marginLeft = "15%";
        textParagraphs[d].style.width = "70%";
      }
    }
    //Gallery container position
    if (imgGalleryCont) {
      imgGalleryCont.style.height = "57vh";
    }

  } else if (window.innerWidth > window.innerHeight) {
    //Background positioning
    backgroundContainer.style.background = "url(img/interiors/Back01.jpg)";
    backgroundContainer.style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`;
    // Logo positioning
    if (mainLogo) {
      mainLogo.style.width = `37vw`;
    }
    //Gallery container position return to default
    if (imgGalleryCont) {
      imgGalleryCont.style.height = "67vh";
    }
    if (window.innerHeight < minHeight) {
      // Logo positioning
      if (mainLogo) {
        mainLogo.style.width = `55vh`;
      }
      // Text paragraphs positioning
      if (textParagraphs) {
        for (var d = 0; d < textParagraphs.length; d++) {
          textParagraphs[d].style.marginTop = "1%";
          textParagraphs[d].style.marginLeft = "1%";
          textParagraphs[d].style.width = "97%";
          textParagraphs[d].style.height = "44vh";
        }
      }
      if (textPConct) {
        for (var d = 0; d < textPConct.length; d++) {
          textPConct[d].style.margin = "0.5%";
        }
      }
      //Header buttons positioning
      for (var a = 0; a < headerBtn.length; a++) {
        headerBtn[a].style.margin = "1%";
      }
      sMediaC.style.margin = "1%";
      //Gallery container positioning
      if (imgGalleryCont) {
        imgGalleryCont.style.height = "45vh";
      }
    }
  }
}

(function () {
  arrayPopulator(flowersImgList, "flower", flowersAmount);
  arrayPopulator(interiorsImgList, "interior", interiorsAmount);
}());

window.onload = function () {
  buttonsToggle();
  appear(mainTemplate, 0, 1, 9);
  mainTemplate.innerHTML = homePage;
  sizeSetup();
  pictureSizer();
}

function buttonsToggle() {
  function classEventToggle(nameOfClass, enOrDisable) {
    if (enOrDisable) {
      for (let i = 0; i < document.getElementsByClassName(`${nameOfClass}`).length; i++) {
        document.getElementsByClassName(`${nameOfClass}`)[i].style.pointerEvents = "initial";
      }
    } else {
      for (let i = 0; i < document.getElementsByClassName(`${nameOfClass}`).length; i++) {
        document.getElementsByClassName(`${nameOfClass}`)[i].style.pointerEvents = "none";
      }
    }
  }
  classEventToggle("header-button", false);
  classEventToggle("galleriesBtn", false);
  eventKeyDisable = true;

  setTimeout(function() {
    classEventToggle("header-button", true);
    classEventToggle("galleriesBtn", true);
    eventKeyDisable = false;
  }, 900);
}

function clickedElem(elemName) {
  buttonsToggle();
  appear(mainTemplate, 100, -1, 9);
  setTimeout(function(){
    buttonsToggle();
    elemName === "HOME" ? mainTemplate.innerHTML = homePage : elemName === "ABOUT" ? mainTemplate.innerHTML = about : elemName === "OUR MISSION" ? mainTemplate.innerHTML = ourMission :
    elemName === "STYLING PROCESS" ? mainTemplate.innerHTML = stylingProcess : elemName === "REQUEST CONSULTATION" ? mainTemplate.innerHTML = contact : elemName === "INTERIORS" ?
    mainTemplate.innerHTML = loadImgGallery(elemName) : elemName === "DECOR" ? mainTemplate.innerHTML = loadImgGallery(elemName) : mainTemplate.innerHTML = homePage;
    appear(mainTemplate, 0, 1, 9);
    sizeSetup();
    pictureSizer();
  }, 900);
}

function loadImgGallery(galleryName) {
  let toFindImgArray = [ { gName: "INTERIORS", theArray: interiorsImgList }, { gName: "DECOR", theArray: flowersImgList } ];
  let theImgArray = toFindImgArray.filter(anImgObj => anImgObj.gName === galleryName )[0].theArray;
  let galleryToRender = theImgArray.map(anImg => { return `<div class="galleryImgCont">
                                                              <img src="${anImg.src}" class="${anImg.className}" alt="${anImg.alt}" tabIndex="0"
                                                                onclick="modalOpen(event.target)" onkeydown="keyValidate(event, false, false, true)"/></div>` });
  return `<div class="galleryCont">${galleryToRender}</div>`;
}

function linkOpener(link) {
  var newWindow = window.open();
  newWindow.opener = null;
  newWindow.location = link;
  newWindow.target = "_blank";
  newWindow;
}

function keyValidate(event, link, nav, onModalOpen, onModalClose, onModalNext, onModalPrev) {
  if (event.keyCode === 13 || event.keyCode === 32) {
    if (link) {
      linkOpener(link);
    } else if (nav && !eventKeyDisable) {
      clickedElem(event.target.innerText);
    } else if (onModalOpen) {
      modalOpen(event.target);
    } else if (onModalClose) {
      closeModal();
    } else if (onModalNext) {
      changeImg(true, false);
    } else if (onModalPrev) {
      changeImg(false, true);
    } else {
      return;
    }
  }
}

window.addEventListener('resize', function(ev){ pictureSizer(); }, true);

function pictureSizer() {
  let galleryThumbImgC = document.getElementsByClassName("galleryImgCont");
  let galleryFullImgC = document.getElementsByClassName("modalPictureCont");
  let widthThousand = 1000;
  let heightSixHundred = 600;
  if (window.innerWidth > widthThousand) {

    for (var d = 0; d < galleryThumbImgC.length; d++) {
      galleryThumbImgC[d].clientWidth > galleryThumbImgC[d].clientHeight ? galleryThumbImgC[d].style.width = "33%" : galleryThumbImgC[d].style.width = "17%";
    }
    for (var d = 0; d < galleryFullImgC.length; d++) {
      galleryFullImgC[d].clientWidth > galleryFullImgC[d].clientHeight ? galleryFullImgC[d].style.width = "71%" : galleryFullImgC[d].style.width = "33%";
    }
  } else if (window.innerWidth < widthThousand) {

    for (var d = 0; d < galleryThumbImgC.length; d++) {
      galleryThumbImgC[d].clientWidth > galleryThumbImgC[d].clientHeight ? galleryThumbImgC[d].style.width = "38%" : galleryThumbImgC[d].style.width = "27%";
    }
    if (window.innerHeight > heightSixHundred) {

      for (var d = 0; d < galleryFullImgC.length; d++) {
        galleryFullImgC[d].clientWidth > galleryFullImgC[d].clientHeight ? galleryFullImgC[d].style.width = "77%" : galleryFullImgC[d].style.width = "75%";
      }
    } else if (window.innerHeight < heightSixHundred) {

      for (var d = 0; d < galleryFullImgC.length; d++) {
        galleryFullImgC[d].clientWidth > galleryFullImgC[d].clientHeight ? galleryFullImgC[d].style.width = "55%" : galleryFullImgC[d].style.width = "24%";
      }
    }
  }
}

function modalOpen(eventTarget) {
  modalCont.innerHTML = `<span class="nextImgModalButton" onclick="changeImg(true, false)" tabIndex="0" role="button" aria-label="next"
                                onkeydown="keyValidate(event, false, false, false, false, true, false)">&#10095;</span>
                         <span class="prevImgModalButton" onclick="changeImg(false, true)" tabIndex="0" role="button" aria-label="previous"
                                onkeydown="keyValidate(event, false, false, false, false, false, true)">&#10094;</span>
                         <div class="modalPictureCont">
                           <span class="closeModalButton" tabIndex="0" role="button" aria-label="close" onclick="closeModal()"
                                onkeydown="keyValidate(event, false, false, false, true)">&times;</span>
                           <img class="modalPicture"  src="${eventTarget.src}" onkeydown="keyValidate(event, false, false, false, true)"
                              alt="${eventTarget.alt}" tabIndex="0" onclick="closeModal()"/>
                         </div>`;
  modalCont.style.display = "flex";
  pictureSizer();
  modalFocus("-1");
}

function closeModal() {
  modalFocus("0");
  modalCont.style.display = "none";
}

function modalFocus(onOff) {
  let toDis = document.querySelectorAll(".header-button, .sMediaCont, .socImg, .galleriesBtnsCont, .galleriesBtn, .signature, .mainLogoCont, .textP, .contactTxt, .flowersIMG, .interiorsIMG, .top-part");
  for (var n = 0; n < toDis.length; n++) {
    toDis[n].setAttribute("tabIndex", `${onOff}`);
  }
}

function currentImgArrayCheck(modalImg) {
  if (modalImg.alt === "flower") {
    return flowersImgList;
  } else if (modalImg.alt === "interior") {
    return interiorsImgList;
  }
}

function changeImg(next, previous) {
  let modalImg = document.getElementsByClassName("modalPicture")[0];
  let modalImgCont = document.getElementsByClassName("modalPictureCont")[0];
  let currentImgArray = currentImgArrayCheck(modalImg);
  if (next) {
    for (let aSingleImg of currentImgArray) {
      if (aSingleImg.src === modalImg.src) {
        currentImgArray.indexOf(aSingleImg) + 1 >= currentImgArray.length ? modalImg.src = currentImgArray[0].src : modalImg.src = currentImgArray[currentImgArray.indexOf(aSingleImg) + 1].src;
        pictureSizer();
        return;
      }
    }
  } else if (previous) {
    for (let aSingleImg of currentImgArray) {
      if (aSingleImg.src === modalImg.src) {
        currentImgArray.indexOf(aSingleImg) - 1 < 0 ? modalImg.src = currentImgArray[currentImgArray.length-1].src : modalImg.src = currentImgArray[currentImgArray.indexOf(aSingleImg) - 1].src;
        pictureSizer();
        return;
      }
    }
  }
}

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
