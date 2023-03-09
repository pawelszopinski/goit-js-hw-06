const list = document.getElementsByTagName("h2");
const listLength = list.length;
const categories = `Number of categories: ${listLength}`;
const category = `Category: `;
const elements = `Elements: `;
const listElements = document.getElementsByTagName("ul");
console.log(`${categories}

${category} ${list[0].textContent}
${elements} ${listElements[1].childElementCount}

${category} ${list[1].textContent}
${elements} ${listElements[2].childElementCount}

${category} ${list[2].textContent}
${elements} ${listElements[3].childElementCount}`);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
