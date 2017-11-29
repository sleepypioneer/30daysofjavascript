/*************** Global Variables ***************/
const p = document.getElementById('projects');
const home = document.querySelector('#returnHome');
const pageOne = document.querySelector('#pageOne');
const container = document.querySelector('.container');



/*************** Event Listeners ***************/
window.addEventListener('load', init);
p.addEventListener('click', scrollToProjects);
home.addEventListener('click', returnHome);

/*************** Functions **************
function resizePageOne() {
    
    pageOne.style.height = window.innerHeight +"px";
}
*/

function scrollToProjects() {
    pageOne.style.display = 'none';
    home.style.visibility = 'visible';
    container.style.top = "0";

}

function returnHome() {
    pageOne.style.display = 'flex';
    home.style.visibility = 'hidden';
    container.style.top = "100vh";
}







function init() {
    
}