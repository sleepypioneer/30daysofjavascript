function loadJSON(callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'scripts/toppings.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    };
    xobj.send(null);
}

const toppingsList = [];
let jsonresponse;

// Call to function with anonymous callback
loadJSON(function(response) {
    // Do Something with the response e.g.
    jsonresponse = JSON.parse(response);
    toppingsList.push(...jsonresponse);
    
});

toppingsArray = ["Salami","Champignons", "Mozzarella", "Spinach", "Roasted Peppers", "Gorgonzola", "Prosciutto", "Caramelized Onions", "Cherry Tomatoes","Pineapple","Olives","Sweetcorn","Garlic","Red Onions"];

function findMatches(wordToMatch, toppingsList) {
  return toppingsList.filter(toppings => {
    //find if city or state matches the search
    const regex = new RegExp(wordToMatch, 'gi'); //makes expression from the variable with 'g' global flag and 'i' insentitive to disregard if letters are upper or lowercase
    return toppings.topping.match(regex); // check if topping matches
  });
}


function displayMatches () {
  const matchArray = findMatches(this.value, toppingsList);
  const html = matchArray.map(toppings => {
    const regex = new RegExp(this.value, 'gi');
    const ToppingName = toppings.topping.replace(regex, `<span class="hl">${this.value}</span>`);
    
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
    } else {
        suggestions.innerHTML = "We don't currently offer that topping, suggest it on our facebookpage!";
    }
    
  } else {
    suggestions.innerHTML = "";
  }
}

const searchInput = document.querySelector('#toppingInputField');
const suggestions = document.querySelector('#suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches); //runs whenever a key is released