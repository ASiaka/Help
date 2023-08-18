console.log("Add.js");

const Add = {
  handleSetItem: function(index, value) {
    localStorage.setItem(index, JSON.stringify(value));
  },

  handlePushItems: function() {
    for( let i = 0; i < arrayItems.length; i++){
      arrayItems.shift();
      console.log(i, arrayItems.length, localStorage.length);
    }
    for( let i = 0; i < localStorage.length; i++){
      arrayItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      // console.log(arrayItems.length, localStorage.length);
    }
  },

  handleOpenAddWordsCard: function () {
    addWordsCard.classList.toggle("add_words_card");
    listWordsCard.classList.remove("list_words_card");
    RemoveWordsCard.classList.remove("remove_words_card");
    moreWordsCard.classList.remove("more_card");
    infoCard.classList.remove("info_card");

    let addWordEn = document.querySelector("#add_word_en");
    let addWordFr = document.querySelector("#add_word_fr");

    if (addWordEn.value.trim() === "") {
      console.log("en empty");
      addWordEn.focus()
    } else if (addWordFr.value.trim() === "") {
        console.log("fr empty");
        addWordFr.focus()
      }
  },

  handleAddWord: function (e) {
    e.preventDefault();
    console.log("submit Ok");

    let addWordEn = document.querySelector("#add_word_en");
    let addWordFr = document.querySelector("#add_word_fr");

    if (addWordEn.value.trim() !== "" && addWordFr.value.trim() !== "") {
      console.log("is not empty");
      const objectItems = {en: addWordEn.value, fr: addWordFr.value, key: localStorage.length+1}
      Add.handleSetItem(localStorage.length+1, objectItems);
      addWordEn.value = "";
      addWordFr.value = "";
      addWordEn.focus();

      Add.handlePushItems();
    } else {
      if (addWordEn.value.trim() === "") {
        console.log("en empty");
        addWordEn.focus()
      }
      if (addWordFr.value.trim() === "") {
        console.log("fr empty");
        addWordFr.focus()
      }
      if (addWordEn.value.trim() === "" & addWordFr.value.trim() === "") {
        console.log("en & fr empty");
        addWordEn.focus()
      }
    }
  }
}