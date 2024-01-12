const accountId = 144553
let accountEmail = "kunal@gmil.com"
var accountPassword = "12345" // not preferred
accountCity = "Jaipur" //not preferred

let accountState
 //accountId = 2 // not allowed as it is a const variable

 console.log(accountId);

 console.table([accountId, accountEmail, accountPassword, accountCity])

 console.log("after change:")

 console.table([accountId, accountState, accountEmail, accountPassword, accountCity])

 /*
    Prefer not to use var
    because of issue in block scope and functional scope
 */
