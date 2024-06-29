console.log("responseTest");

let text = "Response letters"

const responseTest = {
  word: function(word) {
    let array = [];

    for (let index = 0; index < word.length; index++) {
      
      if(word[index] === " ") {
        array.push("__")
      } else {
        array.push(word[index]);
      }
    }

    console.log(array)

    let nodeChild = document.querySelectorAll(".lettersButton");

    if(nodeChild) {
      nodeChild.forEach((x) => {
        responseLettersBlock.removeChild(x);
      });
    }

    array.sort().map((L) => {
      responseTest.handleCreateLettersButton(L);
    });

    // return array
  },

  handleCreateLettersButton: function(letter) {
    let button = document.createElement('button');
    button.classList.add('lettersButton');
    button.textContent= letter;
    responseLettersBlock.appendChild(button);

    let currentLetter = document.querySelectorAll('.lettersButton')
    currentLetter.forEach((x) => {
      x.addEventListener('click', responseTest.handleClickLetters);
    })
  },
  
  handleClickLetters: function(e) {
    const currentLetter = e.currentTarget;
    currentLetter.classList.toggle('lettersButton_click');
    // if(currentLetter.disabled === false) {
    //   currentLetter.disabled = true;
    // } else {
    //   currentLetter.disabled = false;
    // }

    if(currentLetter.className === 'lettersButton lettersButton_click') {
      if(currentLetter.textContent === '__') {
        response.value += " ";
      } else {
        response.value += currentLetter.textContent;
      }
    } else {
      response.value = "";
      let nodeChildClick = document.querySelectorAll(".lettersButton");
      nodeChildClick.forEach((x) => {
        x.classList.remove('lettersButton_click');
      })
    }

    /// Validation
    Play.handleValidation(e);
  },

  handleModeResponse: function() {
    console.log("handleModeResponse");
    
    let modeResponse = document.querySelector('#mode_response');

    modeResponse.addEventListener('click', () => {
      if(modeResponse.className === 'fa-solid fa-hand-point-up') {
        modeResponse.classList.remove('fa-hand-point-up');
        modeResponse.classList.add('fa-keyboard');
        keyBoardOrHand = true;
        response.disabled = false;
        response.focus();
      } else {
        modeResponse.classList.remove('fa-keyboard');
        modeResponse.classList.add('fa-hand-point-up');
        keyBoardOrHand = false;
        response.disabled = true;
        response.blur();
      }
    })
  }
}

// responseLettersBlock.addEventListener('click', responseTest.handleClickLetters)