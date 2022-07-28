const elements = document.getElementsByClassName("crayons-article__body text-styles")
let outputMarkDown = "## Table of Contents\n";

for (let item of elements[0].children) {
	const tag = item.nodeName;
	if (!["H2", "H3", "H4", "H5", "H6"].includes(tag)) return;

	// indent n times 4 spaces (considers h2 to be first, hence -2)
	const indent = tag.slice(-1) - 2
	outputMarkDown += "\t".repeat(indent);
  
	if (indent % 2 === 0) {
		outputMarkDown += "1. "
	} else {
		outputMarkDown += "-  "
	}
	outputMarkDown += "[" + item.textContent.trim() + "](" + link + ")\n";
}

console.log(outputMarkDown);
