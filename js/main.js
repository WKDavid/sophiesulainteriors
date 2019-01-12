const mainTemplate  = document.getElementsByClassName("center-template")[0];

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
                      <p class="textP" tabIndex="0">
                        Send us a few details about your upcoming project and we’ll return your email within 24 hours.
                      </p>
                      <span class="contactTxt" tabIndex="0">myBusiness@email.com</span>
                      <p class="textP" tabIndex="0">
                        For immediate assistance, please call.
                      </p>
                      <span class="contactTxt" tabIndex="0">+1 818-441-2904</span>
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
    elemName === "STYLING PROCESS" ? mainTemplate.innerHTML = stylingProcess : elemName === "REQUEST CONSULTATION" ? mainTemplate.innerHTML = contact : mainTemplate.innerHTML = homePage;
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
