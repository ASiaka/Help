// console.log("more.js");

const More = {
  handleCurrentContent: function (className, title, paragraph) {
    let arrayParagraph;
    // if (paragraph !== null) {
      arrayParagraph = paragraph.split('%')
    // }
    function infoparagraph(arrayParagraph) {
      const infoparagraph = document.createElement('p');
      infoparagraph.className = "info_paragraph";
      infoparagraph.textContent = arrayParagraph;
      return infoparagraph
    }

    function infoLink() {
      const link = document.createElement('a');
      link.className = "info_paragraph";
      link.classList.add("link_paragraph")
      link.href = arrayParagraph[index] + "#contact"
      link.target = '_blank'
      link.textContent = arrayParagraph[index];
      return link
    }

    // function languagesChoosed() {
    //   const select = document.createElement('select');
    //   select.className = "choise_of_languages";

    //   function option(initialLangues, textLangues) {
    //     const option = document.createElement('option');
    //     option.className = "language";
    //     option.value = initialLangues;
    //     option.textContent = textLangues;
    //     return option
    //   }

    //   select.append(option("EN/FR", "Anglais - Français"), option("AR/EN", "Arabe - Anglais"), option("AR/FR", "Arabe - Français"));
    //   return select
    // }

    // console.log(languagesChoosed());
    
    const infoContent = document.createElement('div');
    infoContent.className = "info_content info_" + className;

    const infoTitle = document.createElement('h3');
    infoTitle.className = "info_title";
    infoTitle.textContent = title;
    
    infoCard.removeChild(infoCard.lastChild);

    infoContent.append(infoTitle);

    let index = 0;
    // if (paragraph !== null) {
      while (index < arrayParagraph.length) {
        if (arrayParagraph[index] === "https://asiakdev.fr") {
          infoContent.append(infoLink());
        } else {
          infoContent.append(infoparagraph(arrayParagraph[index]));
        }
        index ++;
      }
    // } else {
    //   infoContent.append(languagesChoosed());
    // }
    infoCard.append(infoContent);
  },

  handleLanguesContent: function (langs) {
    function languagesChoosed() {
      const select = document.createElement('select');
      select.className = "choise_of_languages";
    
      function option(initialLangues, textLangues) {
        const option = document.createElement('option');
        option.className = "language";
        option.value = initialLangues;
        option.textContent = textLangues;
        return option
      }
    
      select.append(option("EN / FR", "Anglais - Français"), option("ES / FR", "Espagnol - Français"), option("IT / FR", "Italien - Français"), option("DE / FR", "Allemand - Français"), option("CN / FR", "Chinois - Français"), option("AR / FR", "Arabe - Français"));
      return select
    }
    
    // console.log(languagesChoosed());

    const infoContent = document.createElement('div');
    infoContent.className = "info_content info_langues";

    const infoTitle = document.createElement('h3');
    infoTitle.className = "info_title";
    infoTitle.textContent = "Langues";
    
    infoCard.removeChild(infoCard.lastChild);

    infoContent.append(infoTitle);
    infoContent.append(languagesChoosed());

    infoCard.append(infoContent);

    const choiseOfLanguages = document.querySelector(".choise_of_languages");
    if (localStorage.length > 0) {
      // console.log(langs);
      choiseOfLanguages.value = langs.langs;
    } else {
      function choiseLang() {
        let choise;
        if (languesChoisies.textContent === "EN / FR") {
          choise = "EN / FR"
        }
        if (languesChoisies.textContent === "ES / FR") {
          choise = "ES / FR"
        }
        if (languesChoisies.textContent === "IT / FR") {
          choise = "IT / FR"
        }
        if (languesChoisies.textContent === "DE / FR") {
          choise = "DE / FR"
        }
        if (languesChoisies.textContent === "CN / FR") {
          choise = "CN / FR"
        }
        if (languesChoisies.textContent === "AR / FR") {
          choise = "AR / FR"
        }
        return choise;
      }
      choiseOfLanguages.value = choiseLang();
    }
  }
}