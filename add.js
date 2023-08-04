// const arrayItems = [];
// const objectItems = {en: "leave", fr: "quiter"}

const StorageItems = {
  handleSetItem: function(index, value) {
    localStorage.setItem(index, JSON.stringify(value));
  },

  handlePushItems: function() {
    for( let i = 0; i < localStorage.length; i++){
      arrayItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  },
  handleRemoveItem: function(item) {
    localStorage.removeItem(item);
  },
  handleClearItems: function() {
    for( let i = 0; i < localStorage.length; i++){
      localStorage.clear(i);
    }
  }
}

// document.querySelector(".header_title").addEventListener('click', () => {
//   StorageItems.handleSetItem(localStorage.length+1, objectItems);
//   StorageItems.handlePushItems();
//   StorageItems.handleRemoveItem(5);
//   StorageItems.handleClearItems();
// });

// console.log(arrayItems);