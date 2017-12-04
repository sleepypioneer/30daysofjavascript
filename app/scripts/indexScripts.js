/*************** Global Variables ***************/
const p = document.getElementById('projects');
const pageOne = document.querySelector('#pageOne');
const container = document.querySelector('.container');



/*************** Event Listeners ***************/
window.addEventListener('load', init);
p.addEventListener('click', scrollToProjects);

// reset page to 0,0 on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

/*************** Functions ***************/

function scrollToProjects() {
    pageOne.style.display = 'none';
    container.style.top = "0";

}

const iframe = document.querySelector("iframe");

function addContent(a) {

  let src;
  if (a === 0) {
    src = "https://sleepypioneer.wordpress.com/";
  }
  if (a === 1) {
    src = "projects/drumKit/drumKit.html";
  }       
  if (a === 2) {
    src = "projects/CSSJSClock/CSSClock.html";
  }
  if (a === 3) {
    src = "projects/CSSVariables/CSSVariables.html";
  }
  if (a === 4) {
    src = "projects/ArrayCardio1/arrayCardio1.html";
  }
  if (a === 5) {
    src = "projects/FlexGallery/flexGallery.html";
  }
  if (a === 6) {
    src = "projects/AjaxTypeAhead/AjaxTypeAhead.html";
  }
  if (a === 7) {
    src = "projects/ArrayCardio2/arrayCardio2.html";
  }
  if (a === 8) {
    src = "projects/HTML5Canvas/html5Canvas.html";
  }
  if (a === 9) {
    src = "projects/DevTools/devTools.html";
  }
  if (a ===10) {
    src = "projects/HoldShiftCheckboxes/checkBoxesWhenHoldingShift.html";
  }
  if (a === 11) {
    src = "projects/customVideoControls/customVideo.html";
  }
  if (a ===12) {
    src = "projects/keySequenceDetection/keySequence.html";
  }
   if (a ===13) {
    src = "projects/referenceVsCopying/referenceVsCopying.html";
  }
   if (a ===14) {
    src = "projects/slideInOnControl/slideInOnScroll.html";
  }
   if (a ===15) {
    src = "projects/LocalStorage/localStorage.html";
  }
  iframe.src = src;    
  iframe.contentWindow.focus();
  const returnHome = document.getElementById('returnHome');
  returnHome.style.visibility = "visible";
}

/*function addContent(a) {
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
            console.log(this)
						//document.getElementById("content").innerHTML = this.responseText;
					}
				};
 				if (a === 1) {
					xhr.open('POST', 'ex.txt', true);
				}       
				if (a === 2) {
					xhr.open('GET', '../projects/CSSJSClock/CSSClock.html', true);
				}
				if (a === 3) {
					console.log(a);
					xhr.open('GET', '../projects/CSSVariables/CSSVariables.html', true);
				}
				if (a === 4) {
					xhr.open('GET', '../projects/ArrayCardio1/arrayCardio1.html', true);
				}
				if (a === 5) {
					xhr.open('GET', 'projects/FlexGallery/flexGallery.html', true);
				}
				if (a === 6) {
					xhr.open('GET', 'projects/AjaxTypeAhead/AjaxTypeAhead.html', true);
				}
				if (a === 7) {
					xhr.open('GET', 'projects/ArrayCardio2/arrayCardio2.html', true);
				}
        if (a === 8) {
					xhr.open('GET', 'projects/HTML5Canvas/html5Canvas.html', true);
				}
        if (a === 9) {
					xhr.open('GET', 'projects/DevTools/devTools.html', true);
				}
        if (a ===10) {
					xhr.open('GET', 'projects/HoldShiftCheckboxes/checkBoxesWhenHoldingShift.html', true);
				}
        if (a === 11) {
					xhr.open('GET', 'projects/customVideoControls/customVideo.html', true);
				}
        if (a ===12) {
					xhr.open('GET', 'projects/keySequenceDetection/keySequence.html', true);
				}
         if (a ===13) {
					xhr.open('GET', 'projects/referenceVsCopying/referenceVsCopying.html', true);
				}
         if (a ===14) {
					xhr.open('GET', 'projects/slideInOnControl/slideInOnScroll.html', true);
				}
         if (a ===15) {
					xhr.open('GET', 'projects/LocalStorage/localStorage.html', true);
				}     
				xhr.send(null);
					
			}*/

function init() {

}