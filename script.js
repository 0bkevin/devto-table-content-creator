const markdownChildren = document.getElementsByClassName("crayons-article__body text-styles")[0].children
let outputMarkDown = "## Table of Contents\n";

for (let item of markdownChildren) {
	const tag = item.nodeName;
	if (!["H2", "H3", "H4", "H5", "H6"].includes(tag)) continue;

	// indent n times 4 spaces (considers h2 to be first, hence -2)
	const indent = tag.slice(-1) - 2
	outputMarkDown += "\t".repeat(indent);
  
	if (indent % 2 === 0) {
		outputMarkDown += "1. "
	} else {
		outputMarkDown += "-  "
	}
	
	const link = "#" + item.firstElementChild.name;
	outputMarkDown += "[" + item.textContent.trim() + "](" + link + ")\n";
}

console.log(outputMarkDown);
