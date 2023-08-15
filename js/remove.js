console.log("Remove.js");

const Remove = {
  handleRemoveItem: function(item) {
    localStorage.removeItem(item);
  },
  handleClearItems: function() {
    for( let i = 0; i < localStorage.length; i++){
      localStorage.clear(i);
    }
  },

  // handleRemoveWord: function (e) {  
  //   const currentWord = document.querySelector(".words");

  //   console.log(localStorage.key(1), localStorage.getItem(2), currentWord);
  // },
}