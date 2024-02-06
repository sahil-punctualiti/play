const { v4: uuidv4 } = require('uuid');


let groupNames = [
    "Solar Technician",
    // "UPS Technician",
    // "Thermal Technician PAC",
    // "Security Supervisor CCTV",
    // "Security Supervisor ACS",
    // "BMS Technician",
    // "Thermal Technician CAC"
]

let levels = 4;
let newGroups = []
for (let i = 0; i < levels; i++) {
    for (let j = 0; j < groupNames.length; j++) {
        let newGroupName = groupNames[j] + "_L" + i;
        let date = Date.now();
        console.log(date);
        let group = {
            "groupId": uuidv4(),
            "createdDate": {
                "timestamp": {
                    "$numberLong": date
                },
                "ISODate": new Date(date)
            },
            "status": "ACTIVE",
            "siteDetails": {
                "siteId": "9b41f368-8883-4e1a-b3d7-b12c48e5cf08",
                "siteName": "Greater Noida"
            },
            "groupName": newGroupName,
            "groupModule": "HELPDESK",
            "__v": 0
        }
        newGroups.push(group)
    }

}

console.log(newGroups);