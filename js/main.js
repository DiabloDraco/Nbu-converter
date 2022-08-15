
fetch("https://nbu.uz/uz/exchange-rates/json/")
.then(res => res.json())
.then(data => renderSelect(data.sort()))


function renderSelect(tipa) {
    let select = document.querySelector("#select")
    let fragment = document.createDocumentFragment()
    for (let i = 0; i < tipa.length; i++) {
        let newOption = document.createElement("option")
        newOption.textContent = tipa[i].code
        newOption.value = tipa[i].code
        newOption.classList.add(`i${i}`)
        fragment.appendChild(newOption)
    }
    select.appendChild(fragment)
    let elPul1 = document.querySelector(".i23")
    elPul1.selected = true
}

let elForm = document.querySelector("#form")

elForm.addEventListener("submit" , (evt)=> {
    evt.preventDefault()
    fetch("https://nbu.uz/uz/exchange-rates/json/")
    .then(res => res.json())
    .then(data => renderResult(data))
    function renderResult(array) {   
    let elInput = document.querySelector("#input").value
    let elResult = document.querySelector("#result")
    let elSelector = document.querySelector("#select").value
    let elTitle = document.querySelector("#title")
    let elPul = document.querySelector("#pul")
    
    for (let i = 0; i < array.length; i++) {
        if (elSelector == array[i].code) {
            elResult.textContent = `${(Number(elInput) / Number(array[i].cb_price)).toFixed(2)}`
            elTitle.textContent = array[i].title
            elPul.textContent = array[i].title
        }
    }
    }
})