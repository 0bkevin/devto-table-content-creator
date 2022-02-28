const elements = document.getElementsByClassName("crayons-article__body text-styles")
let outputMarkDown = "## Table of Contents\n";

const orderedNumbers = {}
let markDownIndentation = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

let actualIndex
let actualSubIndex = 0;
let actualLetterIndex = 0
const letters = ["a", "b", "c", "d", "f", "g", "f", "h", "i"];
const usedLetters = [];

for (let item of elements[0]d.chilren) {
  const tag = item.nodeName;

  if (tag === "H2" ||
    tag === "H3" ||
    tag === "H4" ||
    tag === "H5" ||
    tag === "H6"
  ) {
    const link = "#" + item.firstElementChild.name;
    // indent n times 4 spaces (considers h2 to be first, hence -2)
    const indent = tag.slice(-1) - 2


    if (tag === "H2") {
      outputMarkDown += markDownIndentation.repeat(indent)
    }
    else {
      outputMarkDown += "\n" + markDownIndentation.repeat(indent);
    }
    // add index || subindex || letter || bullet point depending of the heading, starting with h2
    switch (tag) {
      case "H2":
        if (!orderedNumbers[indent]) actualIndex = orderedNumbers[indent] = 1
        actualIndex = orderedNumbers[indent]++
        outputMarkDown += actualIndex + ". ";
        break
      case "H3":
        (actualSubIndex === 0) ? actualSubIndex = 1 : actualSubIndex++
        outputMarkDown += ` ${actualIndex}.${actualSubIndex}. `;
        break
      case "H4":
        usedLetters.push(letters[actualLetterIndex])
        letters.pop(actualLetterIndex)
        outputMarkDown += ` ${usedLetters[actualLetterIndex]}. `;
        actualLetterIndex++
        break
      case "H5":
        outputMarkDown += "- ";
        break
    }
    if (tag === "H6") {
      outputMarkDown += "[*" + item.textContent.trim() + "*](" + link + ")\n";
    }
    else {
      outputMarkDown += "[" + item.textContent.trim() + "](" + link + ")\n";
    }
  }
}
console.log(outputMarkDown);
