let a = {
    l:1
}

let b= {
    o:a["l"] || 9
}

console.log(b);