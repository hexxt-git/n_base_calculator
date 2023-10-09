a_el = document.getElementById("digits-input-a")
b_el = document.getElementById("digits-input-b")
c_el = document.getElementById("digits-input-c")
base_el = document.getElementById("base-input")
operation_el = document.getElementsByName("operation-input")

setInterval(()=>{    
    base = parseInt(base_el.value)

    a = new number(a_el.value, base)
    b = new number(b_el.value, base)

    a.convert_base(10)
    b.convert_base(10)

    operation = ""
    for(let i in operation_el){
        if(operation_el[i].checked) operation = operation_el[i].id
    }

    let c = new number("0",2)
    if(operation == "add"){
        let sum = a.get_decimal_int() + b.get_decimal_int()
        c = new number(sum.toString(), 10)
        c.convert_base(base)
    }
    if(operation == "sub"){
        let sum = a.get_decimal_int() - b.get_decimal_int()
        c = new number(sum.toString(), 10)
        c.convert_base(base)
        if(a.get_decimal_int() < b.get_decimal_int()){c = new number("0", base)}
    }
    if(operation == "mul"){
        let sum = a.get_decimal_int() * b.get_decimal_int()
        c = new number(sum.toString(), 10)
        c.convert_base(base)
    }
    if(operation == "div"){
        if(b.get_decimal_int() == 0){c = new number("0",base)}
        else{
            let sum = a.get_decimal_int() / b.get_decimal_int()
            c = new number(sum.toString(), 10)
            c.convert_base(base)
        }
    }

    c_el.value = c.get_string()
}, 100)