"use strict";

const server = require("../ExpressServer");
const port = 3000;

//서버
server.listen(port,(err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});
