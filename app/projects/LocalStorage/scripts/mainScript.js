/*************** Protoype Functions ***************/
String.prototype.cap = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
};

/*************** Global Variables ***************/
/******* document objects *******/
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('ul.toppings');
const crust = document.querySelector('ul.bases');
const items = JSON.parse(localStorage.getItem('items')) || []; // check is there is anything in local storage, if not an item array is given.
const addFavourite = document.querySelector('#saveFavourite');
const clearOrder = document.querySelector('#clearOrder');
const order = document.querySelector('#order');
const toppingInput = document.querySelector('#toppingInputField');
const searchInput = document.querySelector('#toppingInputField');
const suggestions = document.querySelector('#suggestions');
let toppingOptions;
 
/*************** Functions for making an order ***************/
 function checkToppingExists(text) {
  text = text;
  if(toppingsArray.indexOf(text)){
  return true;
  } else {
    return false;
  }
}

function addItem(e) {
  e.preventDefault(); // stops it moving on immedietely.
  const text = (this.querySelector('[name=item]')).value.toLowerCase().cap();
  if(checkToppingExists(text)) {
    const item = {
      text,
      done: false
    };
    items.push(item);
    items[items.length-1].done ="true";
    populateList(items, itemsList);
    //localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  } else {
    alert('sorry we do not have that topping, you can request it through our facebook page!');
  }
  
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => { //tunary event below to make sure checked is not set to true (you can not do checked= false - does not work!)
    return `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : '' }/> 
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return; // only get input clicks
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  populateList(items, itemsList);
}

function toggleCheckedCrust(e) {
  const input = e.path[1].children[0];
  if(!input.matches('input')) return; // only get input clicks
  input.checked = true;
}





/*************** Functions for searching ***************/
const toppingsArray = ["Salami","Champignons", "Mozzarella", "Spinach", "Roasted Peppers", "Gorgonzola", "Prosciutto", "Caramelized Onions", "Cherry Tomatoes","Pineapple","Olives","Sweetcorn","Garlic","Red Onions"];

function findMatches(wordToMatch, toppingsArray) {
  return toppingsArray.filter(toppings => {
    //find if city or state matches the search
    const regex = new RegExp(wordToMatch, 'gi'); //makes expression from the variable with 'g' global flag and 'i' insentitive to disregard if letters are upper or lowercase
    return toppings.match(regex); // check if topping matches
  });
}


function displayMatches () {
  const matchArray = findMatches(this.value, toppingsArray);
  const html = matchArray.map(toppings => {
    const regex = new RegExp(this.value, 'gi');
    const ToppingName = toppings.replace(regex, `<span class="hl">${this.value}</span>`);
    
    return `
      <li>
        <span class="name">${ToppingName}</span>
      </li>
    `;
  });
  
  htmlString = html.join(''); //.join('') converts this to a string because map returns an array.
  
  if(searchInput.value != "") {
    if(htmlString != "") {
        suggestions.innerHTML = htmlString;
        toppingOptions = document.querySelectorAll('#suggestions li');
        toppingOptions.forEach(option => option.addEventListener('click', chooseOption)); 
    } else {
        suggestions.innerHTML = "We don't currently offer that topping, suggest it on our facebookpage!";
    }
    
  } else {
    suggestions.innerHTML = "";
  }
 
}

function chooseOption(e){
  document.querySelector('#toppingInputField').value = e.path[1].innerText;
  addItems.click();
}


/*************** Functions for hover over for info ***************/




/*************** Event Listeners ***************/

/******* Search options *******/
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches); //runs whenever a key is released



/******* Check Options *******/
itemsList.addEventListener('click', toggleDone);
crust.addEventListener('click', toggleCheckedCrust);

addItems.addEventListener('submit', addItem);

/******* Hover over for info *******/


/******* Save as Standard & Clear *******/
addFavourite.addEventListener('click', (items) => {
   localStorage.setItem('items', JSON.stringify(items));
});
clearOrder.addEventListener('click', (items) => {
  itemsList.innerHTML = "<li>Start adding Toppings below...</li>";
  //localStorage.removeItem('items', JSON.stringify(items));
  items = [];
  toppingInput.value = "";
});

/******* Make Order *******/



