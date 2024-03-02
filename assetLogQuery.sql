SELECT
a.Asset_Id as assetId,
a.Updated_Time as updateTime,
a.Assigend_To_User_Id as assginedToUserId,
a.Last_Date_Time as lastDateTime,
a.Last_IP as lastIP,
a.Last_User_Id as lastUserId,
a.Update_Location as updateLocation,
a.Apk_Web_Version as apkWebVersion,
a.GeoLoc as geoLocation,
b.Status as currentAssetStatusName,
b.Color as currentAssetStatusColor,
c.Status as previousAssetStatusName,
c.Color as previousAssetStatusColor,
COALESCE(d.mailid, e.User_Name) as lastUserName,
COALESCE(d1.mailid, e1.User_Name) as assigneToUserName

FROM pun_asset_status_log a
LEFT OUTER JOIN ker_status b on a.Asset_Status_Id=b.Auto_Id
LEFT OUTER JOIN ker_status c on a.Previous_Asset_Status_Id=c.Auto_Id
LEFT OUTER JOIN helpdk_users d on a.Last_User_Id= d.id
LEFT OUTER JOIN ker_user_master e on a.Last_User_Id= e.Auto_Id
LEFT OUTER JOIN helpdk_users d1 on a.Assigend_To_User_Id= d1.id
LEFT OUTER JOIN ker_user_master e1 on a.Assigend_To_User_Id= e1.Auto_Id
;