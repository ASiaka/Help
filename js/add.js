// console.log("Add.js");

const Add = {
  handleSetItem: function(index, value) {
    localStorage.setItem(index, JSON.stringify(value));
  },

  handlePushItems: function() {
    // console.log(arrayItems, arrayItems.length);

    for( let i = 0; i < localStorage.length; i++){
      arrayItems.shift();
      // console.log(arrayItems, arrayItems.length);
    }
    for( let i = 0; i < localStorage.length; i++){
      arrayItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      // console.log(arrayItems, arrayItems.length);
    }

    // console.log(arrayItems, arrayItems.length);

    Play.lang1(); Play.lang2(); Play.lang1and2();
  },

  handleOpenAddWordsCard: function () {
    ///Dépanage
    document.querySelector(".choise_of_languages") === null &&
    More.handleLanguesContent(Langs.handleCurrentLangs());
    ///bug au clique sur add après avoir cliqué sur autre que Langues

    Langs.handleShowCurrentLangs("lang1", "lang2");

    addWordsCard.classList.toggle("add_words_card");
    listWordsCard.classList.remove("list_words_card");
    RemoveWordsCard.classList.remove("remove_words_card");
    moreWordsCard.classList.remove("more_card");
    changeLanguagesCard.classList.remove("change_languages_card");
    infoCard.classList.remove("info_card");
    RemoveVocabularyCard.classList.remove("remove_vocabulary_card");

    let addWordLang1 = document.querySelector("#add_word_lang1");
    let addWordLang2 = document.querySelector("#add_word_lang2");

    if (addWordLang1.value.trim() === "") {
      addWordLang1.focus()
    } else if (addWordLang2.value.trim() === "") {
        addWordLang2.focus()
      }
  },

  handleAddWord: function (e) {
    e.preventDefault();
    // console.log("submit Ok");

    let addWordLang1 = document.querySelector("#add_word_lang1");
    let addWordLang2 = document.querySelector("#add_word_lang2");
    
    let maxKey = [];
    let newKey = localStorage.length+1;
    
    function keyword() {
      // maxKey = [];
      for( let i = 0; i < localStorage.length; i++){
        maxKey.push(localStorage.key(i))
        // console.log(localStorage.key(i), newKey, maxKey, Math.max(...maxKey));
      }

      // console.log(newKey, maxKey);

      for (let i = 0; i < maxKey.length; i++) {
        if (maxKey[i] == newKey) {
          newKey = Math.max(...maxKey)+1;
        }        
      }

      return newKey;
    }
    // console.log(keyword());

    if (addWordLang1.value.trim() !== "" && addWordLang2.value.trim() !== "") {
      const choiseOfLanguages = document.querySelector(".choise_of_languages");

      const objectItems = {lang1: addWordLang1.value, lang2: addWordLang2.value, key: keyword(), langs: choiseOfLanguages.value}
      Add.handleSetItem(keyword(), objectItems);
      addWordLang1.value = "";
      addWordLang2.value = "";
      addWordLang1.focus();

      Add.handlePushItems();
    } else {
      if (addWordLang1.value.trim() === "") {
        addWordLang1.focus()
      }
      if (addWordLang2.value.trim() === "") {
        addWordLang2.focus()
      }
      if (addWordLang1.value.trim() === "" & addWordLang2.value.trim() === "") {
        addWordLang1.focus()
      }
    }
  }
}