let filterQuery = { "modulesAccess.userMaster": { $size: 1 } }
let updateQuery = { "$push": { "modulesAccess.userMaster.0.accessList": { "$each": ["addUsersToGroups", "checkGroupName"] } } }

