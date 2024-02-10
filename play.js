const { v4: uuidv4 } = require('uuid');


let data = [
    {
        cameraNo: 107, description: "GATE NO 8 (OUT GATE) - GF", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 108, description: "GATE NO 8 (IN GATE) - GF", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 110, description: "PICKUP & DROPOFF POINT - GF", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 115, description: " OUT SIDE ATRIUM - GF", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 111, description: "ATRIUM REVOLVING DOOR - GF", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 114, description: " RECEPTION DESK - GF", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 112, description: "GF LOW RISE LIFT LOBBY ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 113, description: "GF HIGH RISE LIFT LOBBY ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 121, description: "GF SUTTLE LIFT LOBBY ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 55, description: "T-2  IN RAMP B-1", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 56, description: "T-2  OUT RAMP B-1", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 227, description: " STAIRCASE NO 09 - TERRACE ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 224, description: "24TH FLOOR  LIFT LOBBY ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 223, description: " STAIRCASE NO 09 - 24TH  FLOOR", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 220, description: "LIFT LOBBY  - 23RD FLOOR", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 219, description: " STAIRCASE NO 09 - 23RD FLOOR", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 216, description: "LIFT LOBBY 22ND FLOOR", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 215, description: "  STAIRCASE NO 09 - 22ND FLOOR", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 212, description: "LIFT LOBBY 21ST FLOOR ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 26, description: "T-2  IN RAMP B-2 ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 27, description: "T-2  OUT RAMP B-2 ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 211, description: "STAIRCASE NO 09 - 21ST FLOOR ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 3, description: "T-2 B-2 DRIVEWAY NEAR SUTTLE LIFT LOBBY ", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 13, description: "T-2 B-2 DRAIEWAY NEAR PUMP ROOM", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 8, description: "T-2 B-2  DRIVEWAY NEAR SERVICE LIFT LOBBY ", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 12, description: "T-2 B-2  DRIVEWAY NEAR ST-07 ", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 10, description: "T-2 B-2 NEAR PARKING SLOT NO.2137 & 2138", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 21, description: "PARKING AREA NEAR ST-02 ,B-2", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 24, description: "OUT SIDE PARKING AREA NEAR ST-01", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 77, description: "T-2 IN RAMP B-3", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 78, description: "T-2 OUT RAMP B-3", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 82, description: "B-3,T-2,ST- 05 DRIVEWAY NEAR SHUTTLE LIFT LOBBY", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 64, description: "B-3,T-2, OUT SIDE  DRIVEWAY NEAR SHUTTLE LIFT LOBBY", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 63, description: "B-3,T-2,ST-06  DRIVEWAY ", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 67, description: "B-3,T-2,ST -05 OUT SIDE DRIVEWAY NEAR SHUTTLE LIFT LOBBY", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 70, description: "DRIVEWAY PARKING B-3, T-2  SLOT NO - 3026", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 100, description: "T-2 IN RAMP B-4", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 101, description: "T-2 OUT RAMP-B-4", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 85, description: "B-4,T-2, DRIVEWAY NEAR SHUTTLE LIFT", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 88, description: "BASMENT-4, DRIVWAY NEAR SLOT NO-4059", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 87, description: "T2 - BASMENT-4, SLOT NO- 4055", cameraType: "DOME CAMERA"
    },
    {
        cameraNo: 93, description: "T-2, BASEMENT-4 DRIVEWAY,ST - 03", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 128, description: "BOOM BARRIER VEHICLE ENTRY FROM GATE NO. 08 (NEAR GCRM OFFICE)", cameraType: "BULLET CAMERA"
    },
    {
        cameraNo: 129, description: "DRIVEWAY STILT PARKING AREA TOWARDS SPORTS ZONE", cameraType: "BULLET CAMERA"
    }
]
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
            "parentAssetId": "59494b6e-7c3e-47a9-afb7-6d7bf0717a69",
            "parentAssetName": "NVR-3"
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