const markdownChildren = document.getElementsByClassName("crayons-article__body text-styles")[0].children
let outputMarkdown = "## Table of Contents\n";

for (let item of markdownChildren) {
	const tag = item.nodeName;
	if (!["H2", "H3", "H4", "H5", "H6"].includes(tag)) continue;

	// indent n times 4 spaces (considers h2 to be first, hence -2)
	const indentLevel = tag.slice(-1) - 2;
	const indent = "\t".repeat(indentLevel);
	const index = (indent === 0) ? "1.  " : "-   ";
	
	const headerId = "#" + item.firstElementChild.name;
	const link = `[${item.textContent.trim()}](${headerId})`;
	
	outputMarkdown += indent + index + link + "\n";
}

console.log(outputMarkdown);
