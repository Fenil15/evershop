const { OK, INTERNAL_SERVER_ERROR } = require("@evershop/evershop/src/lib/util/httpStatus");

module.exports = (request, response, next) => {
    const {age} = request.body;
    try {
        response.status(OK);
        const minAge = 18;
        if(age&& parseInt(age) >= minAge) {
            response.cookie('age-verified', 1, {
                maxAge : 1000*60*60*24*10 // 10 days in milli seconds
            });
            response.json({
                data : {
                    age,
                    passed : true
                }
            });
        } else {
            response.json({
                data : {
                    age,
                    passed : false
                }
            });
        }
    } catch(e) {
        response.status(INTERNAL_SERVER_ERROR);
        response.json({
            error : {
                status : INTERNAL_SERVER_ERROR,
                message : e.message
            }
        })
    }

}