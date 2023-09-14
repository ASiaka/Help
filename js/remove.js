console.log("Remove.js");

const Remove = {
  handleRemoveItem: function(item) {
    localStorage.removeItem(item);
  },
  handleClearItems: function() {
    localStorage.clear();
    // for( let i = 0; i < localStorage.length; i++){
    //   localStorage.clear(i);
    // }
  },

  handleRemoveWord: function (e) {  
    const nodeWord = document.querySelector(".words");
    const currentWord = document.querySelector(".word");

    nodeWord.addEventListener('click', (e) => {
      console.log(e.target);
    });

    // console.log(localStorage.key(1), localStorage.getItem(2));
    // console.log(nodeWord, currentWord);
  },
}