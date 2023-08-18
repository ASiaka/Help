console.log("more.js");

const More = {
  handleCurrentContent: function (className, title, paragraph) {
    const infoContent = document.createElement('div');
    infoContent.className = "info_content info_" + className;

    const infoTitle = document.createElement('h3');
    infoTitle.className = "info_title";
    infoTitle.textContent = title;

    const infoparagraph = document.createElement('div');
    infoparagraph.className = "info_paragraph";
    infoparagraph.textContent = paragraph;
    
    infoCard.removeChild(infoCard.lastChild);

    infoContent.append(infoTitle, infoparagraph);
    infoCard.append(infoContent)
  }
}