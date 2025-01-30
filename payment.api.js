const axois = require("axios").default;
const crypto = require("crypto");

require("dotenv").config();

const cryptomus = axios.create({
    baseURL: "https://api.cryptomus.com/v1"
})

const DEFAULT_CURRENCY = "usd";