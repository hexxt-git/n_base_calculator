let button = document.getElementById("button")

button.addEventListener("click", ()=>{
    let digits = document.getElementById("digits-input").value
    let from_base = parseInt(document.getElementById("from-base-input").value)
    let to_base = parseInt(document.getElementById("to-base-input").value)

    let a = new number(digits, from_base)
    a.convert_base(to_base)

    document.getElementById("result-input").value = a.get_string()
})