const mainTemplate  = document.getElementsByClassName("center-template")[0];

const homePage = `<div class="mainLogoCont"><img class="mainLogoImg" src="img/socialrest/SLogoBLK.png" alt="logo"/></div>`;

const about = `<div class="mainLogoCont"><p class="textP" tabIndex="0">
                  ABOUT TEXT PLACEHOLDER
                  Lorem ipsum dolor sit amet, per et prima tantas omittantur, ne ipsum dicta mel. Unum vivendo ea nam, sed scripta graecis ad. Nisl vero cum ea.
                  Per quod patrioque in. Nihil noluisse sapientem cum in, fugit malorum pro ei. Dictas senserit concludaturque ne eos, vidisse menandri conclusionemque sed in.
                  Ei sanctus saperet splendide vis. Id eruditi assueverit sed. Vis similique vulputate ex, unum labitur ei his.
                </p></div>`;

const ourMission = `<div class="mainLogoCont"><p class="textP" tabIndex="0">
                      OUR MISSION TEXT PLACEHOLDER
                      Lorem ipsum dolor sit amet, per et prima tantas omittantur, ne ipsum dicta mel. Unum vivendo ea nam, sed scripta graecis ad. Nisl vero cum ea.
                      Per quod patrioque in. Nihil noluisse sapientem cum in, fugit malorum pro ei. Dictas senserit concludaturque ne eos, vidisse menandri conclusionemque sed in.
                      Ei sanctus saperet splendide vis. Id eruditi assueverit sed. Vis similique vulputate ex, unum labitur ei his.
                    </p></div>`;

const stylingProcess = `<div class="mainLogoCont"><p class="textP" tabIndex="0">
                          STYLING PROCESS TEXT PLACEHOLDER
                          Lorem ipsum dolor sit amet, per et prima tantas omittantur, ne ipsum dicta mel. Unum vivendo ea nam, sed scripta graecis ad. Nisl vero cum ea.
                          Per quod patrioque in. Nihil noluisse sapientem cum in, fugit malorum pro ei. Dictas senserit concludaturque ne eos, vidisse menandri conclusionemque sed in.
                          Ei sanctus saperet splendide vis. Id eruditi assueverit sed. Vis similique vulputate ex, unum labitur ei his.
                        </p></div>`;

const contact = `<div class="mainContactCont">
                      <span class="contactTxt" tabIndex="0">PHONE: +1 310-854-9888</span>
                      <span class="contactTxt" tabIndex="0">myBusiness@email.com</span>
                      <form className="quickMailForm" action="/GSmailer.php" method="post">
                        <input type="hidden" name="initializer" value="Sent_From_Quick_Contact_Button"/>
                        <label className="quickMailInputLabel">Full Name: </label>
                        <input required className="quickMailInputTxt" type="text" name="full_name" aria-label="full name"></input>
                        <label className="quickMailInputLabel">Address: </label>
                        <input required className="quickMailInputTxt" type="text" name="adress" aria-label="adress"></input>
                        <label className="quickMailInputLabel">E-Mail: </label>
                        <input required className="quickMailInputTxt" type="email" name="email"></input>
                        <label className="quickMailInputLabel">Message: </label>
                        <textarea rows="9" className="quickMailInputTxt" name="your_message" aria-label="your message"></textarea>
                        <input className="quickFormSubmitBtn" type="submit" name="submit" value="Submit"/>
                      </form>
                 </div>`;

window.onload = function () {
  buttonsToggle();
  appear(mainTemplate, 0, 1, 9);
  mainTemplate.innerHTML = homePage;
}

function buttonsToggle() {
  for (let i = 0; i < document.getElementsByClassName("header-button").length; i++) {
    document.getElementsByClassName("header-button")[i].style.pointerEvents = "none";
  }
  setTimeout(function(){
    for (let i = 0; i < document.getElementsByClassName("header-button").length; i++) {
      document.getElementsByClassName("header-button")[i].style.pointerEvents = "initial";
    }
  }, 900);
}

function clickedElem(elemName) {
  buttonsToggle();
  appear(mainTemplate, 100, -1, 9);
  setTimeout(function(){
    buttonsToggle();
    elemName === "HOME" ? mainTemplate.innerHTML = homePage : elemName === "ABOUT" ? mainTemplate.innerHTML = about : elemName === "OUR MISSION" ? mainTemplate.innerHTML = ourMission :
    elemName === "STYLING PROCESS" ? mainTemplate.innerHTML = stylingProcess : elemName === "CONTACT" ? mainTemplate.innerHTML = contact : mainTemplate.innerHTML = homePage;
    appear(mainTemplate, 0, 1, 9);
  }, 900);
}

function linkOpener(link) {
  let newWindow = window.open();
  newWindow.opener = null;
  newWindow.location = link;
  newWindow.target = "_blank";
  newWindow();
}

// mainTemplate.innerHTML = contact;

// appear(mainTemplate, 0, 1, 30);

// appear(mainTemplate, 100, -1, 30);

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
