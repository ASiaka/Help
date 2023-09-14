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
          // List.handleWordsList
          RemoveWordContent.classList.remove("remove_word_content");
        });

        buttonWordNon.addEventListener('click', () => {
          RemoveWordContent.classList.remove("remove_word_content");
        });
      });
    })
  },
}