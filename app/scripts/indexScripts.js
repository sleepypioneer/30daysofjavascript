window.addEventListener('load', resizePageOne);
window.addEventListener('resize', resizePageOne);



function resizePageOne() {
    console.log(window.innerHeight);   
    pageOne = document.querySelector('#pageOne');
    pageOne.style.height = window.innerHeight +"px";
    console.log(pageOne.style.height);
}