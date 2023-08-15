console.log("Add.js");

const Add = {
  handleSetItem: function(index, value) {
    localStorage.setItem(index, JSON.stringify(value));
  },

  handlePushItems: function() {
    for( let i = 0; i < arrayItems.length; i++){
      arrayItems.shift();
      console.log(arrayItems);
    }
    for( let i = 0; i < localStorage.length; i++){
      arrayItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      console.log(arrayItems);
    }
  },

  handleAddWord: function (e) {
    e.preventDefault();
    console.log("submit Ok");

    let enWord = document.querySelector("#en");
    let frWord = document.querySelector("#fr");

    if (en.value.trim() !== "" && fr.value.trim() !== "") {
      console.log("is not empty");
      const objectItems = {en: enWord.value, fr: frWord.value, key: localStorage.length+1}
      Add.handleSetItem(localStorage.length+1, objectItems);
      Add.handlePushItems();
      enWord.value = "";
      frWord.value = "";
      enWord.focus();
    } else {
      if (en.value.trim() === "") {
        console.log("en empty");
        enWord.focus()
      }
      if (fr.value.trim() === "") {
        console.log("fr empty");
        frWord.focus()
      }
      if (en.value.trim() === "" & fr.value.trim() === "") {
        console.log("en & fr empty");
        enWord.focus()
      }
    }
  }
}