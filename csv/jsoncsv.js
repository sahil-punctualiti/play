const fs = require('fs');
const filePath = './csvFiles/test.csv';

let a = [
    {
        month: "jan",
        cust1: "12",
        cust2: "13"
    },
    {
        month: "feb",
        cust1: "19",
        cust2: "23"
    },
    {
        month: "mar",
        cust1: "11",
        cust2: "03"
    }
]

// month,cust1,cust2
// jan,12,45
// feb,56,98
function jasonToCsv(jsonObjArray) {
    let header = Object.keys(a[0]).join(",");
    let data = "";
    for (let i = 0; i < jsonObjArray.length; i++) {
        const element = jsonObjArray[i];
        let values = Object.values(element).join(",")
        data += values + "\n"
    }
    let csvData = header + "\n" + data;
    return csvData
}
let content = jasonToCsv(a)

fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.log({ content });
        console.error('Error writing to file:', err);
    } else {
        console.log('Content successfully written to the file.');
    }
});




