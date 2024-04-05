const fs = require('fs');

let d = fs.readFileSync("./csvFiles/test.csv", "utf-8");
function csvTojson(csvString) {
    let data = csvString.split("\n");
    console.log(data);
    let keys = data[0].split(",");
    console.log({ keys });
    let jsonObjArray = [];
    for (let i = 1; i < data.length; i++) {
        const values = data[i].split(',');
        console.log({ values });
        let obj = {};
        let flag = false;
        for (let j = 0; j < keys.length; j++) {
            if (values[j]) {
                flag = true;
                obj[keys[j]] = values[j];
            }
        }
        if (flag) {
            jsonObjArray.push(obj);
        }
    }
    return jsonObjArray;

}

let lo = csvTojson(d)

console.log(lo);