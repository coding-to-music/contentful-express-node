var contentful = require("contentful");
require("dotenv").config();

var client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

exports.client = client;

// console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
// console.log(process.env.CONTENTFUL_SPACE_ID);

// console.log(client);

// var config = require('../package.json').config || {}
// accessToken: config.accessToken,
// space: config.space
