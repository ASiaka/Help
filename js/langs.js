// console.log("langs.js");

let Langs = {
  handleCurrentLangs: function() {
    let langs = [];
    let langsUsed;
    for( let i = 0; i < localStorage.length; i++){
      langs.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    // console.log(langs);
    langsUsed = langs.find((x) => x.lang1);
    return langsUsed;
  },

  handleShowCurrentLangs: function (classL1, classL2, classL1_2=null) {
    const choiseOfLanguages = document.querySelector(".choise_of_languages");
    const lang = choiseOfLanguages.value.split(" / ");
    // console.log(lang);
    const l1 = document.querySelector(`.${classL1}`);
    l1.textContent = lang[0];
    const l2 = document.querySelector(`.${classL2}`);
    l2.textContent = lang[1];
    // if (classL1_2 !== null) {
    //   const l1_2 = document.querySelector(`.${classL1_2}`);
    //   l1_2.textContent = lang[0] + " / " + lang[1];  
    // }
  }
}