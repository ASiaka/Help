console.log("more.js");

const More = {
  handleCurrentContent: function (className, title, paragraph) {
    const arrayParagraph = paragraph.split('%');
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
    
    const infoContent = document.createElement('div');
    infoContent.className = "info_content info_" + className;

    const infoTitle = document.createElement('h3');
    infoTitle.className = "info_title";
    infoTitle.textContent = title;
    
    infoCard.removeChild(infoCard.lastChild);

    infoContent.append(infoTitle);

    let index = 0;
    while (index < arrayParagraph.length) {
      if (arrayParagraph[index] === "https://asiakadev.com") {
        infoContent.append(infoLink());
      } else {
        infoContent.append(infoparagraph(arrayParagraph[index]));
      }
      index ++;
    }
    infoCard.append(infoContent)
  }
}