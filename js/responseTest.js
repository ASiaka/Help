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
    if(currentLetter.disabled === false) {
      currentLetter.disabled = true;
    } else {
      currentLetter.disabled = false;
    }
    console.log(currentLetter.textContent);
    if(currentLetter.textContent === '__') {
      response.value += " ";
    } else {
      response.value += currentLetter.textContent;
    }
    currentLetter.style.backgroundColor = "gainsboro";

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