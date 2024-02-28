let a = [
    {
        "siteId": "69abb026-b1b0-4849-915e-0d54914a34e5",
        "siteName": "THC"
    },
    {
        "siteId": "cc3d15d0-57aa-429b-9a03-0e2a8716b9eb",
        "siteName": "B8"
    },
    {
        "siteId": "0bda37f6-645d-11eb-9ab8-005056991178",
        "siteName": "Cyber Park"
    },
    {
        "siteId": "0f707976-73f4-11ee-8989-0050569907d8",
        "siteName": "Cluster 1A 1B 1C"
    },
    {
        "siteId": "13be8f09-fba0-11e9-a206-1c1b0dc1b24f",
        "siteName": "DLF Center"
    },
    {
        "siteId": "1f84a317-ec21-11e9-b831-00185131e9dd",
        "siteName": "B9"
    },
    {
        "siteId": "23fd4dee-0620-4a33-b221-e571084a5e00",
        "siteName": "Tech Park"
    },
    {
        "siteId": "25bb1fd3-882a-11e9-b981-00185131e9dd",
        "siteName": "Plaza"
    },
    {
        "siteId": "3000d8e6-966d-11e9-978d-00185131e9dd",
        "siteName": "B5"
    },
    {
        "siteId": "310ea7d1-f708-11e9-b0d7-00185131e9dd",
        "siteName": "Cyber Hub"
    },
    {
        "siteId": "39626040-ec1c-11e9-b831-00185131e9dd",
        "siteName": "B14"
    },
    {
        "siteId": "4c5adcbd-ef45-11e9-bd3a-00185131e9dd",
        "siteName": "Square"
    },
    {
        "siteId": "510b3bbb-73f4-11ee-8989-0050569907d8",
        "siteName": "Cluster 2 3 8"
    },
    {
        "siteId": "532fc3b0-f6f9-11e9-b0d7-00185131e9dd",
        "siteName": "B8"
    },
    {
        "siteId": "57cfe961-73f4-11ee-8989-0050569907d8",
        "siteName": "Cluster 5 7 10"
    },
    {
        "siteId": "5d03224c-73f4-11ee-8989-0050569907d8",
        "siteName": "Cluster 9A 9B 4"
    },
    {
        "siteId": "60849ded-73f4-11ee-8989-0050569907d8",
        "siteName": "Cluster 12 12B"
    },
    {
        "siteId": "6416058a-73f4-11ee-8989-0050569907d8",
        "siteName": "Cluster 14 15"
    },
    {
        "siteId": "69f0b213-8c2c-11e9-969d-00185131e9dd",
        "siteName": "B10"
    },
    {
        "siteId": "75220b86-8299-11e9-b981-00185131e9dd",
        "siteName": "Infinity"
    },
    {
        "siteId": "7aa05209-fa42-11e9-b0d7-00185131e9dd",
        "siteName": "Gateway Tower"
    },
    {
        "siteId": "8ff8df64-f487-11e9-9832-00185131e9dd",
        "siteName": "Center Court"
    },
    {
        "siteId": "97dc002c-ef44-11e9-bd3a-00185131e9dd",
        "siteName": "SEZ Silokhera"
    },
    {
        "siteId": "b312d300-ec22-11e9-b831-00185131e9dd",
        "siteName": "IBM Silokhera"
    },
    {
        "siteId": "b8deff0b-8c2c-11e9-969d-00185131e9dd",
        "siteName": "Cybergreen"
    },
    {
        "siteId": "dbbc08b5-67f0-11e9-bb18-00185131e9dd",
        "siteName": "B7"
    },
    {
        "siteId": "de234c5a-a5d7-11ec-a471-0050569907d8",
        "siteName": "DLF Forum"
    },
    {
        "siteId": "e374df57-8823-11e9-b981-00185131e9dd",
        "siteName": "B6"
    },
    {
        "siteId": "ee188acb-8c2e-11e9-969d-00185131e9dd",
        "siteName": "Chandigarh"
    },
    {
        "siteId": "f1877e3a-fb9e-11e9-a206-1c1b0dc1b24f",
        "siteName": "MLCP BKSM"
    },
    {
        "siteId": "f4360950-fa3f-11e9-b0d7-00185131e9dd",
        "siteName": "Atria"
    },
    {
        "siteId": "f744ac63-3e1a-492e-bfc7-45fdd54500e7",
        "siteName": "Downtown"
    },
    {
        "siteId": "fecc7a09-fb9d-11e9-a206-1c1b0dc1b24f",
        "siteName": "MLCP SN"
    },
    {
        "siteId": "ff5cc20e-ec0b-11e9-a15a-1c1b0dc1b24f",
        "siteName": "Two Horizon Center"
    },
    {
        "siteId": "4c4aa4eb-93b0-4866-951f-c3978546e873",
        "siteName": "OHC"
    }
]

let b = {
    "_id": {
        "$oid": "65b8c795a892ec128daa3d9b"
    },
    "groupId": "9fcae64f-9c4e-46b6-962d-f433bc15c0b0",
    "createdDate": {
        "timestamp": {
            "$numberLong": "1632310528000"
        },
        "ISODate": "Wed Sep 22 2021 17:05:28 GMT+0530 (India Standard Time)"
    },
    "status": "ACTIVE",
    "siteDetails": {},
    "groupName": "CRO",
    "groupModule": "HELPDESK",
    "__v": 0
}

let c = a.map(j => {
    let d = { ...b };
    d.siteDetails = j;
    return d;
})

console.log(c);