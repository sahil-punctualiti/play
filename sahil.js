let a = {
    "sahil.a":1
}

a["sahil.a.a"] = 2

let b ={}
b["l"]= a["sahil.a.a"]

console.log(b);