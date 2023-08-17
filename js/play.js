console.log("Play.js");

const Play = {
  handleChooseCurrentVocabulary: function () {
    currentVocabulary = eval(category.value);
    Play.handlePlayWords();
    console.log(currentVocabulary);
  },

  fr: function () {
    const fr = currentVocabulary.map(i => i.fr.toLowerCase());
    return fr
  },

  en: function () {
    const en = currentVocabulary.map(i => i.en.toLowerCase());
    return en  },

  wordsArray: function () {
    const newArray = [];
    Play.fr().map((i) => newArray.push(i));
    Play.en().map((i) => newArray.push(i));
    return newArray
  },

  wordFind: function() {
    const find = currentVocabulary.find(i => {
      return (i.fr.toLowerCase() === randomWord.textContent.toLowerCase() ||
              i.en.toLowerCase() === randomWord.textContent.toLowerCase())
    });
    console.log(find);
    return find
  },

  handlePlayWords: function () {
    listWordsCard.classList.remove("list_words_card");
    addWordsCard.classList.remove("add_words_card");
    RemoveWordsCard.classList.remove("remove_words_card");

    let wordIndex = Math.round(Math.random() * (Play.wordsArray().length - 1));
    randomWord.classList.add("random_word_style");
    randomWord.textContent = Play.wordsArray()[wordIndex];
    response.value = "";
    response.focus();

    const eyesButton = document.querySelector(".span_button_none");
    eyesButton.classList.add("span_button");

    Play.seeTheResponse();
  },

  seeTheResponseButton: function () {
    let spanButton = document.createElement('button');
    spanButton.textContent = "?";
    spanButton.className = "span_button_none";
    contentRandomWord.append(spanButton);

    let spanResponse = document.createElement('span');
    // spanResponse.textContent = "That's Ok";
    spanResponse.className = "span_response_none";
    contentRandomWord.append(spanResponse);

    spanButton.addEventListener('click', () => {
      spanResponse.classList.toggle("span_response");
    })
  },

  seeTheResponse: function() {

    console.log(Play.wordFind());
    let spanResponse = document.querySelector('.span_response_none');

    if (randomWord.textContent.toLowerCase() === Play.wordFind().en.toLowerCase()) {
      spanResponse.textContent = Play.wordFind().fr;
    } else if (randomWord.textContent.toLowerCase() === Play.wordFind().fr.toLowerCase()) {
        spanResponse.textContent = Play.wordFind().en;
      } else {
          spanResponse.textContent = "";
        }
  },

  handleValidation: function() {
    if (randomWord.textContent.toLowerCase() === Play.wordFind().en.toLowerCase() && response.value.toLowerCase() === Play.wordFind().fr.toLowerCase()) {
      successWord.classList.add("success");
      failedWord.classList.remove("failed");

      goodResponse.textContent = Play.wordFind().fr;
      response.value = "";

      setTimeout(() => {
        Play.handlePlayWords();
        successWord.classList.remove("success");
        goodResponse.textContent = "";
      }, 1500);

    } else if (randomWord.textContent.toLowerCase() === Play.wordFind().fr.toLowerCase() && response.value.toLowerCase() === Play.wordFind().en.toLowerCase()) {
        successWord.classList.add("success");
        failedWord.classList.remove("failed");

        goodResponse.textContent = Play.wordFind().en;
        response.value = "";

        setTimeout(() => {
          Play.handlePlayWords();
          successWord.classList.remove("success");
          goodResponse.textContent = "";
        }, 1500);

      } else {
          successWord.classList.remove("success");
          failedWord.classList.add("failed");
        }
  },

}