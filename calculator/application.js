a_el = document.getElementById("digits-input-a")
b_el = document.getElementById("digits-input-b")
c_el = document.getElementById("digits-input-c")
base_el = document.getElementById("base-input")
operation_el = document.getElementsByName("operation-input")

setInterval(()=>{    
    let error = false
    let base = parseInt(base_el.value)

    let a = new number(a_el.value, base)
    let b = new number(b_el.value, base)

    let operation = ""
    for(let i in operation_el){
        if(operation_el[i].checked) operation = operation_el[i].id
    }

    let c = new number("0",base)
    if(operation == "add"){
        let calc = a.get_decimal_int() + b.get_decimal_int()
        c = new number(calc.toString(), 10)
        c.convert_base(base)
    }
    if(operation == "sub"){
        let calc = a.get_decimal_int() - b.get_decimal_int()
        c = new number(calc.toString(), 10)
        c.convert_base(base)
        if(a.get_decimal_int() < b.get_decimal_int()){error = true}
    }
    if(operation == "mul"){
        let calc = a.get_decimal_int() * b.get_decimal_int()
        c = new number(calc.toString(), 10)
        c.convert_base(base)
    }
    if(operation == "div"){
        if(b.get_decimal_int() == 0){error = true}
        else{
            let calc = Math.round(a.get_decimal_int() / b.get_decimal_int())
            c = new number(calc.toString(), 10)
            c.convert_base(base)
        }
    }

    error = error || c.error || a.error || b.error

    if(error) c_el.value = "error"
    else c_el.value = c.get_string()
}, 100)