"use strict";

//모듈
const express = require("express");
const server = express();

const home = require("./routes/home"); //라우팅

//세팅
server.set("views engine", "ejs");
server.set("views", "./views");

//미들웨어 등록 //중간가공단계
server.use("/", home);

module.exports = server;
