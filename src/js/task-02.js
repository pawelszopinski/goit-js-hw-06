const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list= document.getElementById('ingredients') 
for(let i=0;i<ingredients.length;i++) {
const elements = document.createElement("li")
elements.className = "item"
console.log(elements.outerHTML)
elements.textContent = ingredients[i]
list.append(elements)
}