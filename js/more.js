console.log("more.js");

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
      link.href = arrayParagraph[index] + "/contact"
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
        if (arrayParagraph[index] === "https://asiakadev.com") {
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
    
      select.append(option("EN / FR", "Anglais - Français"), option("AR / EN", "Arabe - Anglais"), option("AR / FR", "Arabe - Français"));
      return select
    }
    
    console.log(languagesChoosed());

    const infoContent = document.createElement('div');
    infoContent.className = "info_content info_langues";

    const infoTitle = document.createElement('h3');
    infoTitle.className = "info_title";
    infoTitle.textContent = "Langues";
    
    infoCard.removeChild(infoCard.lastChild);

    infoContent.append(infoTitle);
    infoContent.append(languagesChoosed());

    infoCard.append(infoContent);

    if (localStorage.length > 0) {
      console.log(langs);
      const choiseOfLanguages = document.querySelector(".choise_of_languages");
      choiseOfLanguages.value = langs.langs;
    }
  }
}