let service = require("./app/services/postServices/postCoreServices")
let getServ = require("./app/services/getServices/getCoreServices")
let updateQuery = [
    {
        "$set": {
            "ticketLogs.$[].logMessage": "$ticketLogs.logType"
        }
    }
]

let b = getServ.getData("/clientAdmin/helpdesk/getHelpDeskTickeData", { "createdDate.epochDate": { "$gt": 0 } });
b.then(
    (d) => {
        console.log(d.data.length);
        for (let index = 0; index < d.data.length; index++) {
            const element = d.data[index];
            let ticketLogs = element.ticketLogs;
            for (let l = 0; l < ticketLogs.length; l++) {
                let logMessage = ticketLogs[l].logType + " by " + ticketLogs[l].logUser.userName
                let b = service.updateData("/clientAdmin/helpdesk/updateHelpDeskTickeData", { "helpdeskTicketId": element.helpdeskTicketId }, { "$set":{[`ticketLogs.${l}.logMessage`]: logMessage }});
                b.catch(e => console.log(e)).then(e => console.log(e))

            }

        }
        console.log("done");
    }

)
// let a = service.updateData("/clientAdmin/helpdesk/updateHelpDeskTickeData", { "createdDate.epochDate": { "$gt": 0 } }, updateQuery)

// a.catch(e => console.log(e)).then(e => console.log(e))