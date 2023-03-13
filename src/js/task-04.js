const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0
let result = document.getElementById("value")

incrementBtn.addEventListener ("click", () => {
  counterValue+=1
  result.textContent=counterValue
}
    )
decrementBtn.addEventListener ("click", () => {
  counterValue-=1
  result.textContent=counterValue
}
    )

