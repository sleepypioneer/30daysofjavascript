/*************** Global Variables ***************/
const p = document.getElementById('projects');
const pageOne = document.querySelector('#pageOne');
const container = document.querySelector('.container');
const iframe = document.querySelector("iframe");


/*************** Event Listeners ***************/
window.addEventListener('load', init);
p.addEventListener('click', scrollToProjects);

// reset page to 0,0 on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


/*************** Utility Functions ***************/
function debounce(func, wait = 20, immediate = true) { //used so that the scroll function below is not called so frequent and causes performance issues.
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
    
function findElementPosition(element) {
  let domRect = element.getBoundingClientRect();
  return domRect.y;
}

/*************** Functions ***************/

function scrollToProjects() {
    pageOne.style.display = 'none';
    container.style.top = "0";
    window.addEventListener('scroll', debounce(changeNavButtonOnScroll));
}


/*+++++to add ++++++
 function takePageOneOfScreenOnScrollDown(){
  
}*/


/*++++to do - change this function so it is not inline on html */
function addContent(a) {

  let src;
  if (a === 0) {
    src = "https://sleepypioneer.wordpress.com/";
  }
  if (a === 1) {
    src = "projects/01JavaScriptDrumKit/drumKit.html";
  }       
  if (a === 2) {
    src = "projects/02JSandCSSClock/CSSClock.html";
  }
  if (a === 3) {
    src = "projects/03CSSVariables/CSSVariables.html";
  }
  if (a === 4) {
    src = "projects/04ArrayCardioDay%201/arrayCardio1.html";
  }
  if (a === 5) {
    src = "projects/05FlexPanelGallery/flexGallery.html";
  }
  if (a === 6) {
    src = "projects/06TypeAhead/AjaxTypeAhead.html";
  }
  if (a === 7) {
    src = "projects/07ArrayCardioDay%202/arrayCardio2.html";
  }
  if (a === 8) {
    src = "projects/08FunwithHTML5Canvas/html5Canvas.html";
  }
  if (a === 9) {
    src = "projects/09DevToolsDomination/devTools.html";
  }
  if (a ===10) {
    src = "projects/10HoldShiftandCheckCheckboxes/checkBoxesWhenHoldingShift.html";
  }
  if (a === 11) {
    src = "projects/11CustomVideoPlayer/customVideo.html";
  }
  if (a ===12) {
    src = "projects/12KeySequenceDetection/keySequence.html";
  }
   if (a ===13) {
    src = "projects/13SlideinonScroll/slideInOnScroll.html";
  }
   if (a ===14) {
    src = "projects/14JavaScriptReferencesVSCopying/referenceVsCopying.html";
  }
   if (a ===15) {
    src = "projects/15LocalStorage/localStorage.html";
  }
  if (a ===16) {
    src = "projects/16MouseMoveShadow/index-start.html";
  }
  if (a ===17) {
    src = "projects/17SortWithoutArticles/index-START.html";
  }
  if (a ===18) {
    src = "projects/18AddingUpTimeswithReduce/index-START.html";
  }
  if (a ===19) {
    src = "projects/19WebcamFun/index.html";
  }
  if (a ===20) {
    src = "projects/20SpeechDetection/index-START.html";
  }
  if (a ===21) {
    src = "projects/21Geolocation/index-START.html";
  }
  if (a ===22) {
    src = "projects/22FollowAlongLinkHighlighter/index-START.html";
  }
  if (a ===23) {
    src = "projects/23SpeechSynthesis/index-START.html";
  }
  if (a ===24) {
    src = "projects/24StickyNav/index-START.html";
  }
  if (a ===25) {
    src = "projects/25EventCapturePropagationBubblingandOnce/index-START.html";
  }
  if (a ===26) {
    src = "projects/26StripeFollowAlongNav/index-START.html";
  }
  if (a ===27) {
    src = "projects/27ClickandDrag/index-START.html";
  }
  if (a ===28) {
    src = "projects/28VideoSpeedController/index-START.html";
  }
  if (a ===29) {
    src = "projects/29CountdownTimer/scripts-START.js";
  }
  if (a ===30) {
    src = "projects/30WhackAMole/index-START.html";
  }

  iframe.src = src;    
  iframe.contentWindow.focus();
  const returnHome = document.getElementById('returnHome');
  returnHome.style.visibility = "visible";
}



function changeNavButtonOnScroll() {
  let pageNavPosition = findElementPosition(document.querySelector('#pageOne'));
  let returnHomePosition = findElementPosition(document.querySelector('#returnHome'));
  
  //console.log(pageNavPosition);
  //console.log(returnHomePosition);
  
  // need to think here!

}

    




function init() {

}

