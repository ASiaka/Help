console.log("List.js");

const List = {
  wordsList: function (lang1, lang2, backgroundGray) {
    let words = document.querySelector(".words");
    let word = document.createElement('div');
    word.classList.add("word", backgroundGray);
    let listLang1 = document.createElement('p');
    let listLang2 = document.createElement('p');
    listLang1.textContent = lang1;
    listLang2.textContent = lang2;

    word.append(listLang1, listLang2);
    words.append(word);
  },

  handleWordsList: function () {
    let words = document.querySelector(".words");
    while (words.firstChild) {
      words.removeChild(words.firstChild);  
    }

    addWordsCard.classList.remove("add_words_card");
    listWordsCard.classList.toggle("list_words_card");
    RemoveWordsCard.classList.remove("remove_words_card");
    moreWordsCard.classList.remove("more_card");
    infoCard.classList.remove("info_card");
    
    for (let index = 0; index < arrayItems.length; index++) {
      let backgroundGray = "backgroung_white";
      if (index % 2) {
        backgroundGray = "background_gray"
      }
      List.wordsList(arrayItems[index].lang1, arrayItems[index].lang2, backgroundGray);
    }
  }
}