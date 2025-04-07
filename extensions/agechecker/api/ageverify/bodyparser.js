const bodyParser = require("body-parser");

module.exports = (request, response, delegate, next) => {
    bodyParser.json({inflate:false})(request, response, next);
    console.log(request.body);
}