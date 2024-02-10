const { v4: uuidv4 } = require('uuid');


let data = [{
    cameraNo: 6, description: "STAIRCASE NO.7 B-2 NEAR TOILET", cameraType: "DOME CAMERA"
},
{
    cameraNo: 47, description: "STAIRCASE NO.3 B-1", cameraType: "DOME CAMERA"
},
{
    cameraNo: 99, description: "STAIRCASE NO.3 B-4", cameraType: "DOME CAMERA"
},
{
    cameraNo: 98, description: "STAIRCASE NO.3 B-4", cameraType: "DOME CAMERA"
},
{
    cameraNo: 74, description: "STAIRCASE NO.3 B-3,HUB", cameraType: "DOME CAMERA"
},
{
    cameraNo: 51, description: "STAIRCASE NO.2 B-1", cameraType: "DOME CAMERA"
},
{
    cameraNo: 86, description: "STAIRCASE NO.6 B-4,T-2,NEAR PUMP ROOM", cameraType: "DOME CAMERA"
},
{
    cameraNo: 41, description: "STAIRCASE NO.7 B-1,T-2,NEAR ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 22, description: "STAIRCASE NO.2 B-2 CORRIDOOR", cameraType: "DOME CAMERA"
},
{
    cameraNo: 23, description: "STAIRCASE NO.2 B-2 CORRIDOOR", cameraType: "DOME CAMERA"
},
{
    cameraNo: 58, description: "STAIRCASE NO.4 B-1 CORRIDOOR", cameraType: "DOME CAMERA"
},
{
    cameraNo: 81, description: "STAIRCASE NO.5 B-3 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 240, description: "21ST FLOOR REFUGE AREA", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 30, description: "STAIRCASE NO.5 B-2 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 46, description: "STAIRCASE NO.3 B-1", cameraType: "DOME CAMERA"
},
{
    cameraNo: 104, description: "STAIRCASE NO.5 B-4 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 50, description: "STAIRCASE NO.2 B-1 CORRIDOOR", cameraType: "DOME CAMERA"
},
{
    cameraNo: 18, description: "STAIRCASE NO.3 B-2 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 20, description: "BACK SIDE CORRIDOR STAIR NO-4,B-2", cameraType: "DOME CAMERA"
},
{
    cameraNo: 75, description: "STAIRCASE NO.3 B-3 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 11, description: "STAIRCASE NO.7 B-2 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 22, description: "STAIRCASE NO.3 B-2 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 122, description: "STAIRCASE NO.5 GROUND FLOOR", cameraType: "DOME CAMERA"
},
{
    cameraNo: 127, description: "STAIRCASE NO.2 GROUND FLOOR,INSIDE", cameraType: "DOME CAMERA"
},
{
    cameraNo: 69, description: "STAIRCASE NO.7 B-3 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 89, description: "STAIRCASE NO.7 B-4,NEAR TOILET", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 68, description: "STAIRCASE NO.7 B-3", cameraType: "DOME CAMERA"
},
{
    cameraNo: 90, description: "STAIRCASE NO.7 B-4,DRIVWAY SIDE", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 57, description: "STAIRCASE NO.4 B-1 INSIDE CORRIDOOR", cameraType: "DOME CAMERA"
},
{
    cameraNo: 120, description: "SERVICE GATE NO-7", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 126, description: "GROUND FLOOR STAIR NO-1 INSIDE", cameraType: "DOME CAMERA"
},
{
    cameraNo: 92, description: "SERVICE GATE NO-8,B-4", cameraType: "DOME CAMERA"
},
{
    cameraNo: 5, description: "STAIRCASE NO.6 B-2 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 48, description: "STAIRCASE NO.3 B-1 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 20, description: "STAIRCASE NO.3 B-2 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 76, description: "STAIRCASE NO.3 B-3 HUB SIDE", cameraType: "DOME CAMERA"
},
{
    cameraNo: 97, description: "STAIRCASE NO.3 B-4", cameraType: "DOME CAMERA"
},
{
    cameraNo: 52, description: "STAIRCASE NO.2 B-1 E.S.B", cameraType: "DOME CAMERA"
},
{
    cameraNo: 54, description: "STAIRCASE NO.1 B-1 ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 25, description: "STAIRCASE NO.1 B-2 E.S.B", cameraType: "DOME CAMERA"
},
{
    cameraNo: 42, description: "STAIRCASE NO.7 B-1,NEAR TOILET", cameraType: "DOME CAMERA"
},
{
    cameraNo: 80, description: "STAIRCASE NO.4 B-3 CORRIDOOR ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 79, description: "STAIRCASE NO.4 B-3 INSIDE CORRIDOOR ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 103, description: "STAIRCASE NO.4 B-4 CORRIDOOR ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 102, description: "STAIRCASE NO.4 B-4 INSIDE CORRIDOOR ", cameraType: "DOME CAMERA"
},
{
    cameraNo: 123, description: "GROUND FLOOR STAIR NO-4 INSIDE", cameraType: "DOME CAMERA"
},
{
    cameraNo: 59, description: "STAIRCASE NO.5 B-1", cameraType: "DOME CAMERA"
},
{
    cameraNo: 62, description: "STAIRCASE NO.6 B-3", cameraType: "DOME CAMERA"
},
{
    cameraNo: 71, description: "LOW RISE LIFT LOBBY BASMENT-3", cameraType: "DOME CAMERA"
},
{
    cameraNo: 38, description: "SERVICE STAIR NO-8,B-1", cameraType: "DOME CAMERA"
},
{
    cameraNo: 92, description: "STAIR NO-8,B-2", cameraType: "DOME CAMERA"
},
{
    cameraNo: 66, description: "STAIR NO-8,B-3", cameraType: "DOME CAMERA"
},
{
    cameraNo: 249, description: "SERVICE LIFT NO-2", cameraType: "DOME CAMERA"
},
{
    cameraNo: 253, description: "RELEX ZONE ", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 251, description: "RELEX ZONE ", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 238, description: "9TH FLOOR REFUGE AREA ", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 239, description: "5TH FLOOR REFUGE AREA ", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 242, description: "GF STAIR NO-3", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 59, description: "12TH FLOOR REFUGE AREA ", cameraType: "BULLET CAMERA"
},
{
    cameraNo: 244, description: "17TH FLOOR REFUGE AREA ", cameraType: "BULLET CAMERA"
}]
let newAsset = []
for (let i = 0; i < data.length; i++) {
    const assetData = data[i];

    let asset = {
        "assetId": uuidv4(),
        "siteId": "69abb026-b1b0-4849-915e-0d54914a34e5",
        "areaId": "9acf473a-90d2-11ed-acba-ca589f654526",
        "client": {
            "clientId": "ebe05196-1890-45db-87e3-3a0827abdafc",
            "clientName": "DLF",
            "clientType": "CLIENT"
        },
        "parentAreaHararchyArray": [
            "9acf473a-90d2-11ed-acba-ca589f654526"
        ],
        "vendor": [
            {
                "vendorId": null,
                "vendorName": null,
                "vendorStatus": "ACTIVE",
                "vendorContact": null
            }
        ],
        "assetCode": "CAM0" + assetData.cameraNo,
        "assetName": assetData.cameraType + " , CAMERA No. " + assetData.cameraNo,
        "assetType": "CCTV",
        "assetCategory": {},
        "assetSubCategory": {},
        "status": "ACTIVE",
        "serviceType": "Technical Services",
        "isParent": false,
        "parentAsset": {
            "parentAssetId": "2b700029-0be4-4b8c-8449-7e22f27e4035",
            "parentAssetName": "NVR-8"
        },
        "attachments": [],
        "assetDetails": {
            "description": assetData.description,
            "clientAssetCode": "",
            "childAssetDetails": "",
            "Make": "",
            "quantity": "0",
            "assetSerialNumber": "",
            "assetOwnerId": "ebe05196-1890-45db-87e3-3a0827abdafc",
            "assetOwnerType": "CLIENT",
            "measureUnit": "",
            "capacity": "",
            "maintainacePolicy": {},
            "fmPartnerCode": "0",
            "clientQrCode": "",
            "companyAssetCode": "",
            "altenatePartNumber": ""
        },
        "createdDate": {
            "epochDate": {
                "$numberLong": "1684736436000"
            },
            "isoDate": {
                "$date": "2023-05-22T06:20:36.000Z"
            }
        }
    }
    newAsset.push(asset)
}

console.log(JSON.stringify(newAsset));