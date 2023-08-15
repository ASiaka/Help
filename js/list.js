console.log("List.js");

const List = {
  wordsList: function (en, fr, backgroundGray) {
    let words = document.querySelector(".words");
    let word = document.createElement('div');
    word.classList.add("word", backgroundGray);
    let listEn = document.createElement('p');
    let listFr = document.createElement('p');
    listEn.textContent = en;
    listFr.textContent = fr;

    word.append(listEn, listFr);
    words.append(word);
  },

  handleWordsList: function () {
    let words = document.querySelector(".words");
    while (words.firstChild) {
      words.removeChild(words.firstChild);  
    }

    addForm.classList.remove("add_form");
    listWords.classList.toggle("list");
    
    for (let index = 0; index < arrayItems.length; index++) {
      let backgroundGray = "backgroung_white";
      if (index % 2) {
        backgroundGray = "backgroung_gray"
      }
      List.wordsList(arrayItems[index].en, arrayItems[index].fr, backgroundGray);
    }
  }
}