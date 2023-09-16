console.log("Remove.js");

const Remove = {
  handleRemoveItem: function(item) {
    localStorage.removeItem(item);
  },
  handleClearItems: function() {
    localStorage.clear();
  },

  handleRemoveWord: function (e) {
    // const nodeWord = document.querySelector(".words");
    const currentWord = document.querySelectorAll(".word");

    currentWord.forEach((index) => {
      let keyWord;
      index.addEventListener('click', (e) => {
        console.log(e.currentTarget.id, index.id);

        keyWord = e.currentTarget.id

        RemoveWordContent.classList.add("remove_word_content");

        buttonWordOui.addEventListener('click', () => {
          Remove.handleRemoveItem(keyWord);

          console.log(localStorage.length, arrayItems.length);

          // for( let i = 0; i < arrayItems.length; i++){
          //   arrayItems.shift();
          //   console.log(arrayItems, arrayItems.length);
          // }

          console.log(arrayItems, arrayItems.length);

          RemoveWordContent.classList.remove("remove_word_content");
        });

        buttonWordNon.addEventListener('click', () => {
          RemoveWordContent.classList.remove("remove_word_content");
        });
      });
    })
  },
}