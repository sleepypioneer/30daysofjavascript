const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || []; // check is there is anything in local storage, if not an item array is given.
  
  function addItem(e) {
    e.preventDefault(); // stops it moving on immedietely.
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
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
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }
  
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList);